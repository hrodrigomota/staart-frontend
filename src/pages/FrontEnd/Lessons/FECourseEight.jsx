import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseEight() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/2b7e134e-87c3-40fb-885e-2fd438c9d4ea"
    ).then(async (response) => {
      const body = await response.json();
      setLessons(
        body.modules.map((lesson) => ({
          title: lesson.title,
          lesson: lesson.lessons.map((value) => (
            <div key={value.title} className="container-class">
              {value.title}
            </div>
          )),
        }))
      );
    });
  }, []);

  function handleButton() {
    navigate('/journey/e774057d-f0e8-4d5f-8076-33522fffb96d')
  }

  return (
    <div className="wrapper-classes">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Fundamentos do JavaScript</h2>
      <h3>
      JavaScript é uma linguagem de programação dinâmica muito utilizada nos navegadores. Foi criada com propósito de manipular elementos no HTML, mas acabou crescendo e atualmente podemos ver diversos ambientes que executam JavaScript. Neste curso, Keilla Menezes irá te apresentar os principais conceitos da programação com JavaScript, te permitindo entender a estrutura da linguagem e desenvolver pequenos programas que podem ser executados tanto no navegador quanto no Node.js, passando pelos gerenciadores de pacote e entendendo como funcionam as atualizações de pacotes de terceiros que podemos utilizar em nossos programas.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

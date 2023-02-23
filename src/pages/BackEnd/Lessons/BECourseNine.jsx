import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseNine() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/23056992-cbf3-4f02-929f-fbe3e996627e"
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
    navigate('/journey/eca8e48a-57b3-46a1-a6ae-923aca77fc11')
  }

  return (
    <div className="wrapper-classes">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Fundamentos do Node.js</h2>
      <h3>
        O Node.js é uma plataforma que consegue executar o JavaScript pelo lado
        do servidor. Através dele podemos construir APIs e aplicações web
        escaláveis de alta performance. Neste curso vamos aprender os principais
        fundamentos dessa plataforma, estudando a fundo cada tópico para que
        possamos entender de fato como é o seu funcionamento e como podemos
        escrever códigos cada vez mais organizado usando as ferramentas certas.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

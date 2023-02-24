import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseSix() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/5286cb1e-96d7-4504-a66b-430262244dc8"
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
      <h2>Git e GitHub na Prática</h2>
      <h3>
        Neste curso serão abordados conceitos básicos de versionamento de
        software, uma atividade fundamental no desenvolvimento de software de
        qualquer tamanho e categoria e como hospedar os seus projetos no GitHub,
        a principal plataforma em nuvem utilizada por desenvolvedores de todo o
        mundo para colaboração em equipe.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

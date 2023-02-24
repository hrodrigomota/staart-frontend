import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseThree() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/a69ee6be-b292-4cb9-a9a5-36481689a800"
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
      <h2>Descomplicando as Estruturas de Dados (JS)</h2>
      <h3>
        Já dominando a lógica de programação, chegou o momento de aprender os
        conceitos que farão você construir aplicações com maior performance e se
        destacar no mercado de trabalho dado que muitos profissionais não
        dominam esse assunto. Vanessa Weber e Gabriel Fróes, os CDF's do Código
        Fonte vão te ensinar de forma prática (mão no código) e extremamente
        didática quais as estruturas básicas para organizarmos os dados na
        memória do computador da melhor maneira possível.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

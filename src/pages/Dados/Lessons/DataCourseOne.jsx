import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function DataCourseOne() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/8aabd52a-9de6-460d-ae89-7bab57ab9b27"
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
    navigate('/journey/73a0e476-b7b1-464d-9d73-8faa71b44922')
  }

  return (
    <div className="wrapper-classes">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Pensamento Analítico e Data-Driven Decisions</h2>
      <h3>
        Será que você realmente utiliza o Pensamento Analítico para resolver os
        problemas cotidianos? Na sua empresa, as decisões são tomadas mais à
        base da intuição ou de fatos e dados? Neste curso, Pollyanna Gonçalves,
        Gerente de Análise e Ciência de Dados na Hotmart, lhe conduzirá a
        descobrir de forma prática a importância destas habilidades, será
        desafiado a fazer uma auto-análise e conhecerá os passos para se
        desenvolver e levar para seu contexto a cultura Data-Driven.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

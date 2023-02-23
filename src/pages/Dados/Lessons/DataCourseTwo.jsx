import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function DataCourseTwo() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61"
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
      <h2>Começando na Área de Dados</h2>
      <h3>
        Há quem diga que os dados são mais valiosos que o petróleo, mas é
        preciso saber como transformá-los em inteligência e insights. Neste
        curso o ex-piloto da Força Aérea Brasileira, atual cientista de dados,
        Carlos Melo irá lhe apresentar as habilidades necessárias, a sua rotina
        profissional e como dar os seus primeiros passos em direção a esta
        carreira.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

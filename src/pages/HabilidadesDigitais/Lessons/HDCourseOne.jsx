import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function HDCourseOne() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/2ba9f95a-e17a-4ede-b754-0f73d36c3b42"
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
    navigate('/journey/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af')
  }

  return (
    <div className="wrapper-classes">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Criando Aplicativos Low Code com Power Apps</h2>
      <h3>
        Hoje uma pessoa fora do universo de programação já é capaz de construir
        aplicativos com pouco ou nenhum código, de maneira fácil e rápida, a fim
        de modernizar processos, resolver difíceis desafios de negócios e tornar
        a empresa mais ágil. Mário Trentim, engenheiro e mestre pelo ITA, atual
        Business Owner da Staart, te conduzirá de forma prática no aprendizado
        dessa tecnologia que te dará autonomia para criar suas aplicações hoje
        mesmo.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseNine() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/afc1ef67-d0fa-4f96-824d-3dd90eab1c12"
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
      <h2>Fundamentos do React</h2>
      <h3>
      O React é uma biblioteca criada pelo Facebook para criar elementos de interface que podem ser compartilhados e reutilizados em uma aplicação de forma rápida, simples e intuitiva. Nesse curso, Mateus Silva irá nos introduzir ao ecossistema do React para a construção de interfaces web. Iremos aprender os principais conceitos dessa ferramenta além de algumas dicas que com certeza irão otimizar o seu desempenho.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseThirteen() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/7cfc5e1c-49c4-4812-8c7a-6826141d3ee0"
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
      <h2>Deploy de aplicações React</h2>
      <h3>
      De nada adianta criarmos aplicações incríveis que se propõem a resolver problemas do mundo real se não conseguirmos expô-las ao mundo para que outras pessoas possam utilizá-las, não é mesmo? Nesse curso, Vitor Alencar, Tech Lead na TaxFix, irá nos ensinar como realizar deploy de aplicações React, isto é, pegar o projeto da nossa máquina e mandar para servidores na internet de forma que qualquer pessoa consiga acessa-la.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

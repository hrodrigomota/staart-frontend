import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function HDCourseThree() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/3b5792a0-d9e4-487c-ba13-275026be5efa"
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
      <h2>Caixa de Ferramentas Básicas de Tecnologia</h2>
      <h3>
        A transformação digital pode ser definida como um fenômeno que incorpora
        o uso da tecnologia digital às soluções de problemas tradicionais. Nesse
        curso, Mário Trentim, doutorando em Engenharia da Computação e Business
        Owner na Staart, abrirá a caixa de ferramenta básica para qualquer
        profissional do mercado e lhe mostrará na prática como dominá-la.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

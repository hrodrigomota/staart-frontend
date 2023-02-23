import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseOne() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/19a31b7a-1286-4927-830e-564cbcd54a23"
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
      <h2>Programação Front-end do Zero</h2>
      <h3>
        Pense nos principais sites que você utiliza no seu dia a dia. Tudo o que
        você vê e interage é o que chamamos de Front End. Neste curso, Leonardo
        Scorza, nômade digital e desenvolvedor Front End há 11 anos, irá te
        ensinar os principais conceitos da web para que você inicie sua carreira
        na área. Compreenda também em detalhes como é o dia a dia de trabalho
        dos profissionais que constroem essas aplicações que não conseguimos
        mais viver sem.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

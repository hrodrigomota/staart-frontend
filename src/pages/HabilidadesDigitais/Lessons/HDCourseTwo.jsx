import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function HDCourseTwo() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/f37347da-7fff-41c8-b66a-68fbbc28d9c5"
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
      <h2>Descomplicando o Microsoft 365</h2>
      <h3>
        Aprenda como tornar seu dia a dia de trabalho mais produtivo e eficiente
        utilizando a suíte de ferramentas da Microsoft com o especialista Mário
        Trentim, atual Business Owner da Staart e reconhecido internacionalmente
        pela Microsoft como Microsoft Most Valuable Professional.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

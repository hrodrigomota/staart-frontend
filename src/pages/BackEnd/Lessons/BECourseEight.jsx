import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseEight() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/fc882c57-f938-4aa7-9cfa-b4528b26e9de"
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
      <h2>Fundamentos do JavaScript para Back End</h2>
      <h3></h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

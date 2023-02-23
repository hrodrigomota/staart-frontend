import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../styles/Course.css";

import { Header } from "../../components/Header";
import { Course } from "../../components/Course";

export function BackEnd() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/journeys/eca8e48a-57b3-46a1-a6ae-923aca77fc11/courses"
    ).then(async (response) => {
      const body = await response.json();
      setCourses(
        body.map((course) => ({
          key: course.id,
          photo: course.medias.thumb,
          title: course.title,
          instructor: course.instructor,
          description: course.description,
        }))
      );
    });
  }, []);

  function handleButton() {
    navigate('/journeys')
  }

  return (
    <div className="wrapper-courses">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Desenvolvimento Back End</h2>
      <h3>
        Por trás de todo grande site que você acessa, existe um bastidor
        denominado como Back End, onde a principal lógica de comportamento dos
        sistemas são desenvolvidos. Nessa jornada você irá aprender os conceitos
        essenciais para aprender a programar, se desenvolver nessa carreira e
        conseguir o seu primeiro emprego com programação.
      </h3>
      {courses.map((course) => (
        <Course
          key={course.key}
          onClick={() => navigate(`/journey/backend/lessons/${course.key}`)}
          photo={course.photo}
          title={course.title}
          instructor={course.instructor}
          description={course.description}
        />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../styles/Course.css";

import { Header } from "../../components/Header";
import { Course } from "../../components/Course";

export function HabilidadesDigitais() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/journeys/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af/courses"
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
      <h2>Habilidades Digitais</h2>
      <h3>
        Aqui você encontra um agrupamento de cursos que vão contribuir com o
        desenvolvimento das suas habilidades associadas à tecnologia digital, ou
        seja, como usar, integrar e aproveitar diferentes ferramentas para
        facilitar e agilizar o trabalho, bem como compreender as lógicas
        digitais que intervêm nos movimentos de mercado.
      </h3>
      {courses.map((course) => (
        <Course
          key={course.key}
          onClick={() => navigate(`/journey/habilidades-digitais/lessons/${course.key}`)}
          photo={course.photo}
          title={course.title}
          instructor={course.instructor}
          description={course.description}
        />
      ))}
    </div>
  );
}

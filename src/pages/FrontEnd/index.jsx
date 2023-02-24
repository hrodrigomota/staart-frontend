import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/App.css";
import { Header } from "../../components/Header";
import { Course } from "../../components/Course";

export function FrontEnd() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/journeys/e774057d-f0e8-4d5f-8076-33522fffb96d/courses"
    ).then(async (response) => {
      const body = await response.json();
      setCourses(
        body.map((course) => ({
          ...course,
        }))
      );
    });
  }, []);

  function handleButton() {
    navigate("/journeys");
  }

  return (
    <div className="wrapper-courses">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Desenvolvimento Front End</h2>
      <h3>
        Que tal aprender a programar e desenvolver sites e aplicações Web
        completas? Essa jornada te guiará no caminho para praticar e obter os
        conhecimentos necessários e fundamentos sólidos para conseguir o seu
        primeiro emprego na área de desenvolvimento Front End.
      </h3>
      {courses.map((course) => (
        <Course
          key={course.id}
          onClick={() => navigate(`/journey/frontend/lessons/${course.id}`)}
          photo={course.medias.thumb}
          title={course.title}
          instructor={course.instructor}
          description={course.description}
        />
      ))}
    </div>
  );
}

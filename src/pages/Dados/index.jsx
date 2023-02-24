import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../styles/App.css";

import { Header } from "../../components/Header";
import { Course } from "../../components/Course";

export function Dados() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/journeys/73a0e476-b7b1-464d-9d73-8faa71b44922/courses"
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
      <h2>Dados</h2>
      <h3>
        Nesta jornada, você fará uma imersão no universo dos dados,
        desenvolvendo de forma prática as principais habilidades que são
        necessárias tanto para analista, cientistas quanto engenheiros de dados.
        Na prática, você aprenderá como tomar decisões baseadas em dados, se tem
        Pensamento Analítico, programação com python para análise de dados,
        coleta, verificação e limpeza dos dados, banco de dados, como analisar,
        visualizar e apresentar suas análises.
      </h3>
      {courses.map((course) => (
        <Course
          key={course.key}
          onClick={() => navigate(`/journey/dados/lessons/${course.key}`)}
          photo={course.photo}
          title={course.title}
          instructor={course.instructor}
          description={course.description}
        />
      ))}
    </div>
  );
}

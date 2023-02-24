import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseTwo() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/4ffd086c-868f-44d1-9f7f-3adf8d7edcc4"
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
      <h2>Construindo seu Primeiro Site (HTML e CSS)</h2>
      <h3>
      Que tal construir o seu primeiro site responsivo já se preocupando com acessibilidade? Reinaldo Ferraz, especialista e evangelista em Web com mais de 24 anos de experiência, professor e autor de quatro livros sobre o tema, te conduzirá ao entendimento pleno e construção do seu primeiro, de muitos sites que virão durante a sua jornada como Dev Front End.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

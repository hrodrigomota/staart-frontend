import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/Lesson.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseEleven() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/ede24be4-c7f7-4190-b13a-1c178b4849c0"
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
      <h2>Caixa de Ferramentas JS Web</h2>
      <h3>
      Você já imaginou como grandes aplicações Web funcionam? Como podemos organizar a nossa aplicação e otimizar o seu desempenho? Chegou o momento de expandirmos o nosso arsenal de ferramentas web, construindo, a partir da lógica de programação com JavaScript, uma aplicação web completa que conta inclusive com interações do usuário para adicionar e remover itens da tela. Tudo isso reaproveitando os conhecimentos adquiridos até aqui somados com novos conceitos que serão apresentados neste curso.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

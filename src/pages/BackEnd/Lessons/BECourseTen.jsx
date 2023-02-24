import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseTen() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/62a5ba54-7754-42c1-a30f-f0ae7eea5507"
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
    navigate('/journey/eca8e48a-57b3-46a1-a6ae-923aca77fc11');
  };

  return (
    <div className="wrapper-classes">
      <Header onClick={handleButton} id="back" title="<< Voltar" />
      <h2>Construindo e Consumindo APIs REST com Node.js</h2>
      <h3>
        REST é um conjunto de padrões que foram criados como intuito de prover
        princípios para a utilização correta e semântica do protocolo HTTP,
        facilitando a manutenção e escalabilidades de APIs. Nesse curso iremos
        aprender como aplicar esses padrões e como construir, do zero, uma API
        que pode ser feita a partir dos módulos nativos do Node.js ou utilizando
        alguma biblioteca ou framework que traz algumas facilidades e abstrações
        para o nosso dia a dia. Veremos como essas duas formas funcionam na
        prática.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

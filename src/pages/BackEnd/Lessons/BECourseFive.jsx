import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseFive() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/1a99deef-b707-4431-ae13-22a82c9b94eb"
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
      <h2>Ambiente de Desenvolvimento VS Code</h2>
      <h3>
        Pense que a principal ferramenta de um desenvolvedor ou desenvolvedora é
        o seu computador, correto? As ferramentas que utilizamos para realizar
        qualquer tarefa na nossa máquina impactam diretamente na qualidade e
        performance com que o trabalho é feito. Pensando nisso, Leonardo Scorza,
        nômade digital e desenvolvedor Front End, te acompanhará durante o
        processo de instalação e configuração da principal ferramenta para o
        desenvolvimento de software: o editor de código.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

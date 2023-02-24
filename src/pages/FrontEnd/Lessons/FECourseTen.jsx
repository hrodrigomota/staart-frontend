import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function FECourseTen() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/74924a45-f351-456c-8667-80cdfd29249d"
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
      <h2>Consumo de APIs com React</h2>
      <h3>
      Um dos principais requisitos de desenvolvedores Front End é a habilidade de trabalhar com requisições HTTP para o consumo de serviços externos que são responsáveis por manter toda a lógica de dados por trás de uma aplicação. Nesse curso iremos aprender de fato como se trabalhar com esse tipo de conexão entre servidores e clientes utilizando o React e o mais interessante aqui é que após a conclusão do curso, você será capaz de trabalhar com requisições HTTP independentemente da biblioteca ou framework que estiver utilizando.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

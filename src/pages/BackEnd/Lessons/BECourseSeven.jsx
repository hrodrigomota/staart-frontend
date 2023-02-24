import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseSeven() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/17d05a10-8193-44db-b091-51ead3e6d3d5"
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
      <h2>Banco de Dados</h2>
      <h3>
        A grande maioria dos aplicativos que você utiliza no dia a dia precisam
        armazenar dados como sua foto de perfil, lista de amigos, conversas,
        publicações, comentários e por aí vai, mas você sabe como isso tudo é
        armazenado e gerenciado? Chegou a hora de dar o seu Staart em Banco de
        Dados e aprender os conceitos práticos e teóricos de como funciona essa
        ferramenta base para a grande maioria dos serviços que utilizamos. Nesse
        curso quem te acompanha é a Daniele Leão, programadora com mais de 13
        anos de experiência, com foco em Back End.
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

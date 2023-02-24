import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/App.css";

import { Lesson } from "../../../components/Lesson";
import { Header } from "../../../components/Header";

export function BECourseFour() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/lessons/468dbdd9-66bf-48ed-91fa-3dfdec5fba4e"
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
      <h2>Desconstruindo a Web</h2>
      <h3>
        Você tem idéia de como a internet funciona? Desde que você escreve
        google.com no seu navegador, o que acontece a partir deste momento?
        Willian Molinari (PotHix), Desenvolvedor de Software há 15 anos e
        escritor do livro "Desconstruindo a Web" compartilha com você, neste
        curso, tudo o que acontece nos bastidores da Internet, as tecnologias
        que permitem essa requisição viajar saindo do seu navegador até chegar
        de volta em você. E aí, topa essa viagem?
      </h3>
      {lessons.map((lesson) => (
        <Lesson key={lesson.title} module={lesson.title} title={lesson.lesson} />
      ))}
    </div>
  );
}

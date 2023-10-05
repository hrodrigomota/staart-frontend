import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../styles/App.css";

import { useAuth } from "../../context/authContext";

import { Header } from "../../components/Header";
import { Journey } from "../../components/Journey";
import { UnavailableServer } from "../../components/UnavailableServer";

export function Journeys() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [journeys, setJourneys] = useState([]);
  const [order, setOrder] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("https://frontend-project.staart.com/journeys")
      .then(async (response) => {
        const body = await response.json();
        setJourneys(
          body.map((journey, index) => ({
            ...journey,
            index,
          }))
        );
      })
      .catch(setHasError(true));
  }, []);
  async function handleLogout() {
    try {
      await logOut();
      navigate("/");
    } catch {
      alert("Ocorreu um erro ao tentar efetuar o logout do usuário.");
    }
  }

  function handleOrder(order) {
    const orderList = order.target.value;

    if (orderList === "default") {
      journeys.sort((a, b) => {
        return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
      });
    }

    if (orderList === "mais-cursos") {
      journeys.sort((a, b) => {
        return a.coursesID.length > b.coursesID.length ? -1 : a.coursesID.length < b.coursesID.length ? 1 : 0;
      });
    }

    if (orderList === "ordem-alfabetica") {
      journeys.sort((a, b) => {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    }

    setOrder(orderList);
  }

  return (
    <div className="wrapper-journeys">
      <Header onClick={handleLogout} id="exit" title="Sair" />
      <h1>Seja bem vindo(a) à Staart!</h1>
      <h2>Jornadas de Aprendizado</h2>
      <h3>Escolha a sua jornada e dê Staart nos estudos!</h3>
      <div className="filter">
        <label>Ordenar por: </label>
        <select name="order" value={order} onChange={handleOrder}>
          <option value="" disabled>
            Selecione...
          </option>
          <option value="mais-cursos">Quantidade de Cursos</option>
          <option value="ordem-alfabetica">Ordem Alfabética</option>
          <option value="default">Padrão</option>
        </select>
      </div>
      <div className="container-journeys">
        {hasError ? (
          <UnavailableServer />
        ) : (
          journeys.map((journey) => (
            <Journey
              key={journey.pathID}
              onClick={() => navigate(`/journey/${journey.pathID}`)}
              id={`_${journey.pathID}`}
              icon={journey.medias.thumb}
              title={journey.title}
              description={journey.description}
              courses={`${journey.coursesID.length} Cursos`}
            />
          ))
        )}
      </div>
    </div>
  );
}

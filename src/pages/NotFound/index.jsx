import "../../styles/App.css";

import cloudError from "/cloud-error.svg";

export function NotFound() {
  return (
    <div className="wrapper-not-found">
      <img src={cloudError} alt="Página não encontrada" />
      <h1>Erro 404</h1>
      <h2>Página não Encontrada!</h2>
      <h3>Desculpe, mas não foi possível carregar esta página 😞</h3>
    </div>
  );
}

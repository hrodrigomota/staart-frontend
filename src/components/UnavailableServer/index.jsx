import cloudError from "/cloud-error.svg";

export function UnavailableServer () {
  return (
    <div className="wrapper-server-error">
      <img src={cloudError} alt="Erro no Servidor" />
      <h2>Serviço Indisponível </h2>
      <h3>Ocorreu um erro durante a requisição ao servidor. Tente novamente mais tarde!</h3>
    </div>
  )
}
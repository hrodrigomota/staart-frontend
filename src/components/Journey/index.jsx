import "./styles.css";

export function Journey(props) {
  return (
    <>
      <a className="wrapper-journey" id={props.id} onClick={props.onClick}>
        <div className="journey">
          <img src={props.icon} alt="Ícone da Jornada" />
          <h2>{props.title}</h2>
        </div>
        <div className="journey-description">
          <h3>{props.description}</h3>
        </div>
        <h3 className="journey-courses-quantity">{props.courses}</h3>
      </a>
    </>
  );
}

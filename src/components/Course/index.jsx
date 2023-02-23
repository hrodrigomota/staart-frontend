import "./styles.css";

export function Course(props) {
  return (
    <>
      <a className="wrapper-course" onClick={props.onClick}>
        <div className="container-course">
          <h2>{props.title}</h2>
          <h3>{props.instructor}</h3>
          <p>{props.description}</p>
        </div>
        <img src={props.photo} alt="Foto do Instrutor" />
      </a>
    </>
  );
}
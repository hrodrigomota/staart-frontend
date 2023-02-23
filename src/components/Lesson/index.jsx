import "./styles.css";

export function Lesson(props) {
  
  return (
    <div className="wrapper-class">
      <div className="container-module">
        <p>{props.module}</p>
      </div>
      {props.title}
    </div>
  );
}

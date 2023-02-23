import "./styles.css";

export function Button(props) {
  return (
    <button className="button" type="submit" disabled={props.disabled}>
      {props.title}
    </button>
  );
}

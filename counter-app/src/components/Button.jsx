

function Button(props) {
    return (
      <button onClick={props.event} className="Button">{props.counterValue}</button>
    );
  }
  
  export default Button;
  
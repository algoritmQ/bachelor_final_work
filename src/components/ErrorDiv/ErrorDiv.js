import './ErrorDiv.css';

function ErrorDiv(props) {
    return (
      <div className="ErrorDiv">  
        <p>{props.text}</p>
      </div>
    );
  }
  export default ErrorDiv;
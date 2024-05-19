import './ErrorDiv.css';
import { useAppContext } from '../../context/AppContext';

function ErrorDiv(props) {
  const { errorColor } = useAppContext();

    return (
      <div className="ErrorDiv" style={{backgroundColor: errorColor}}>  
        <p>{props.text}</p>
      </div>
    );
  }
  export default ErrorDiv;
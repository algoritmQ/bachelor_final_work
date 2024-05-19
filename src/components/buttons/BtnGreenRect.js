import './BtnBlcknWRect.css';
import '../../index.css';

function BtnGreenRect(props) {
    return (
      <div className = "BtnGreenRect font-roboto" style={{width:props.widd, fontSize:'10px'}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnGreenRect;
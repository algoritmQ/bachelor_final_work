import './BtnBlcknWRect.css';
import '../../index.css';

function BtnBlcknWRect(props) {
    return (
      <div className = "btnBlcknWRect font-roboto" style={{width:props.widd, fontSize:'10px'}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlcknWRect;
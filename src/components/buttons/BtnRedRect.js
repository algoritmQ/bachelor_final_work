import './BtnRedRect.css';
import '../../index.css';

function BtnRedRect(props) {
    return (
      <div className = "btnRedRect font-roboto" style={{width:props.widd, fontSize:props.size}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnRedRect;
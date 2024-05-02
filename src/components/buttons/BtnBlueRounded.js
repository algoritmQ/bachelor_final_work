import './BtnBlueRounded.css';

function BtnBlueRounded(props) {
    return (
      <div className="btnBlueRounded" style={{width:props.widd}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlueRounded;
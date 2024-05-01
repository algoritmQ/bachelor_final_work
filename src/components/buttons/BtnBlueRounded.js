import './BtnBlueRounded.css';

function BtnBlueRounded(props) {
    return (
      <div class = "btnBlueRounded" style={{width:props.widd}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlueRounded;
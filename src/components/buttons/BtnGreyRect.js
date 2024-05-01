import './BtnBlueRect.css';

function BtnGreyRect(props) {
    return (
      <div class = "btnGreyRect" style={{width:props.widd}}>
        <span>Загрузить фото</span><div><img src = {require('./cloudImg.png')} style = {{width:'24px',height:'16px'}}/></div>
      </div>
    );
  }
  
  export default BtnGreyRect;
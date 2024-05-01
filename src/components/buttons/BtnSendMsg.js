import './BtnSendMsg.css';

function BtnSendMsg(props) {
    return (
      <div className = "btnSendMsg" style={{width:props.widd}}>
        <img className ="mImg" src = {require('./sendButton.png')}/>
      </div>
    );
  }
  
  export default BtnSendMsg;
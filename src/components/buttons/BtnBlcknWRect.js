import './BtnBlcknWRect.css';
import '../../index.css';

function BtnBlcknWRect(props) {
  const styles = {
    width:props.widd,
    fontSize:'10px',
  }

  if (props.disabled) {
    styles.opacity = 0.4;
  }

    return (
      <div className = "btnBlcknWRect font-roboto" style={styles}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlcknWRect;
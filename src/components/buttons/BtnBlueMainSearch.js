import './BtnBlueMainSearch.css';

function BtnBlueMainSearch(props) {
    return (
      <div class = "btnBlueMainSearch" style={{width:props.widd}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlueMainSearch;
import './BtnBlueMainSearch.css';

function BtnBlueMainSearch(props) {
    return (
      <div className="btnBlueMainSearch" style={{width:props.widd}}>
        {props.name}
      </div>
    );
  }
  
  export default BtnBlueMainSearch;
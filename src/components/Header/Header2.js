
import HamburgerButton from '../buttons/HamburgerButton';
import BtnBlueMainSearch from '../buttons/BtnBlueMainSearch';
import './Header2.css';
import { Link, useNavigate } from 'react-router-dom';

function Header2(props) {
  const navigate = useNavigate();

    return (
      <div class = "Header2">
        <div className="left">
          <Link to = "/MainPage" className = "my-link">
            <span className="logo">         
              <span className="font-rampart-one" style = {{color: '#1B2D8C'}}>G</span>
              <span className="font-rampart-one" style = {{color: '#1B6D14'}}>F</span>
              <span className="font-rampart-one" style = {{color: '#656C0C'}}>P</span>
            </span>
          </Link>
        </div>
       
        <div className="middle">
          <div className="search-field">
            <input value={props.input} onChange={e => props.setInput(e.target.value)} className="font-roboto js-mainSearch" placeholder='Поиск объявлений'/>
            <HamburgerButton
              select = {props.select} setSelect = {props.setSelect} minPrice = {props.minPrice} setminPrice = {props.setminPrice}
              setmaxPrice = {props.setmaxPrice} maxPrice = {props.maxPrice} city = {props.city} setCity = {props.setCity}
            />
          </div>
          <div onClick = {() => {
                              props.setClick(!props.click);
                              navigate('/MainPage');
                              }} className='js-submitDiv' style = {{cursor:'pointer'}}><BtnBlueMainSearch className = "font-roboto" name ="Начать поиск"/></div>
        </div>
      </div>
    );
  }
  
  export default Header2;
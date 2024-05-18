import HamburgerButton from '../buttons/HamburgerButton';
import BtnBlueMainSearch from '../buttons/BtnBlueMainSearch';
import './Header2.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext'
import ErrorDiv from '../ErrorDiv/ErrorDiv';

function Header2(props) {
  const navigate = useNavigate();

  const { setInput, input, setClick, click, error, errorMessage } = useAppContext();

    return (
      <>
        <div className = {`ErrorDivWrapper ${error === -1 ? 'ErrorDivWrapperHide' : 'ErrorDivWrapperShow'} `}>
          <ErrorDiv text={errorMessage} /> 
        </div>
        <div className="Header2">
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
              <input maxlength = "21" value={input} onChange={e => setInput(e.target.value)} className="font-roboto js-mainSearch" placeholder='Поиск объявлений'/>
              <HamburgerButton />
            </div>
            <div onClick = {() => {
                                setClick(!click);
                                navigate('/MainPage');
                                }} className='js-submitDiv' style = {{cursor:'pointer'}}>
                                  <BtnBlueMainSearch className = "font-roboto" name ="Начать поиск"/>
                                  </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header2;

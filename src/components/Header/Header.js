import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';
import '../.././index.css';
import BtnBlueRounded from '../buttons/BtnBlueRounded';
import EnterForm from '../EnterForm/EnterForm';
import RegForm from '../RegForm/RegForm'

function Header({autorized, setAutorized}) {
  const[zEnter, setzEnter] = useState(-1);
  const[zReg, setzReg] = useState(-1);

  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch, autorized]
  );
  return (
    <>
    <div class = "Header">
      <div className ='RightBarFrame'>        
          <Link className="my-link">
            {/* <div onClick = {() => {setAutorized(true)}}> */}
            <div onClick={() => setzEnter(1)}>
              <BtnBlueRounded className = "font-roboto" name="Войти" widd="100px"/>
            </div>
          </Link>
          <Link className="my-link"><div onClick={() => setzReg(1)}><BtnBlueRounded className = "font-roboto" name="Регистрация"/></div></Link>      
      </div>  
    </div>
    <div  className = "inactiveDiv" style = {{zIndex:zEnter}} onClick={() => setzEnter(-1)}>
    <div className = "closeForm" onClick={() => setzEnter(-1)}><span></span></div>
      <div className = "insideBlock" >
        <EnterForm zEnter={zEnter} setzEnter={setzEnter}  autorized={autorized} setAutorized={setAutorized}/>
      </div>     
    </div>
    <div  className = "inactiveDiv" style = {{zIndex:zReg}} onClick={() => setzReg(-1)}>
      <div className = "closeForm" onClick={() => setzReg(-1)}><span></span></div>
      <div className = "insideBlock" >
        <RegForm setzReg = {setzReg}/>
      </div>     
    </div>
    </>
  );
}

export default Header;
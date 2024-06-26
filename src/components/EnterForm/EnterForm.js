import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAuth } from '../../store/reducers/userReducer';
import { setActiveOrders } from '../../store/reducers/basketReducer';
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/api';

import './EnterForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import Spin from '../Spin/Spin';
import { useAppContext } from '../../context/AppContext';

function EnterForm(props) {
  const { setError, setErrorMessage } = useAppContext();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch, props.autorized]);

  async function processEnter() {
    let isSuccess = false;
    setLoading(true);

    await axiosInstance.post('auth/jwt/create/', {
      'username': login,
      'password': password,
    })
    .then(response => {
      dispatch(setAuth(response.data.access));
      isSuccess = true;
    })
    .catch(error => {
      console.log(error.request.status);
      setErrorMessage('Неверные данные');
      setError(1);
      setTimeout(() => {
        setError(-1);
      }, 2000)
    });

    if (isSuccess) {
      await axiosInstance.get(`/users/me/`)
      .then(response => {
        dispatch(setUser(response.data));
        (async () => {
          await axiosInstance.get(`orders/?buyer=${response.data.id}`)
              .then(response => {  
                  dispatch(setActiveOrders(response.data));      
              })
              .catch(error => console.error(error));
        })();


        props.setzEnter(-1);
        props.setAutorized(true);
      })
      .catch(error => console.error(error));
    }
    setLoading(false);
  }

  return (
    <>
      {loading && <Spin />}
      <form>
        <div className="enterForm" onClick={e => e.stopPropagation()}>
            <span className="title">Вход</span>
              <input maxlength = "16" className = "font-roboto" placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}/>
              <input className = "font-roboto" placeholder='Пароль' type="password" value={password} onChange={e => setPassword(e.target.value)} />
              {/* <div className="my-link" onClick = {() => {setAutorized(true)}}><BtnBlue38Rect name = "Войти"/></div>        */}
              <div className="my-link" style = {{cursor: 'pointer'}} onClick = {processEnter}><BtnBlue38Rect name = "Войти"/></div>     
        </div>
      </form>
    </>
  );
}

export default EnterForm;
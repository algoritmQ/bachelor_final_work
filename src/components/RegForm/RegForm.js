import './RegForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import axiosInstance from '../../api/api';
import Spin from '../Spin/Spin';

function RegForm(props) {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  async function createUser() {
    setLoading(true);
    if (password === repeatedPassword) {
      await axiosInstance.post('users/reg/', {
        'username': login,
        'first_name': name,
        'last_name': surname,
        'password': password,
        'city': city,
      })
      .then(response => {
        // ТИПО ВСЁ ОК И МЫ Зарегались
        // alert('Пользователь создан!');
        props.setzReg(-1);
      })
      .catch(error => {
        // ТУТ НЕ ОК
        console.log(error)
      });
    } else {
      // МЕГА КРУТАЯ ОБРАБОТКА ОШИБКИ НЕВЕРНОГО ПАРОЛЯ
    }
    setLoading(false);
  }

  return (
    <>
    {loading && <Spin />}
    <form>
    <div className="regForm" onClick={e => e.stopPropagation()} >
        <span className="title">Регистрация</span>
          <input className = "font-roboto" placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}/>
          <input className = "font-roboto" placeholder='Имя' value={name} onChange={e => setName(e.target.value)}/>
          <input className = "font-roboto" placeholder='Фамилия' value={surname} onChange={e => setSurname(e.target.value)}/>
          <input className = "font-roboto" placeholder='Пароль' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <input className = "font-roboto" placeholder='Повторите пароль' type="password" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)}/>
          <input className = "font-roboto" placeholder='Город' value={city} onChange={e => setCity(e.target.value)}/>
          {/* <Link className="my-link"> */}
            <div onClick={createUser}><BtnBlue38Rect name = "Зарегистрироваться"/></div>
            {/* </Link> */}
    </div>
    </form>
    </>
  );
}

export default RegForm;
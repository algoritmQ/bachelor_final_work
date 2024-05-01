import './RegForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import axiosInstance from '../../api/api';

const selectableOptions = [
  { value: 'Москва', label: 'Москва' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Воронеж', label: 'Воронеж' },
  { value: 'Вологда', label: 'Вологда' }
]

function RegForm(props) {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  async function createUser() {
    if (password === repeatedPassword) {
      await axiosInstance.post('users/', {
        'username': login,
        'first_name': name,
        'last_name': surname,
        'password': password,
        'city': city,
      })
      .then(response => {
        // ТИПО ВСЁ ОК И МЫ Зарегались
        alert('Пользователь создан!');
        props.setzReg(-1);
      })
      .catch(error => {
        // ТУТ НЕ ОК
        console.log(error)
      });
    } else {
      // МЕГА КРУТАЯ ОБРАБОТКА ОШИБКИ НЕВЕРНОГО ПАРОЛЯ
    }
  }

  return (
    <>
    <form>
    <div class = "regForm" onClick={e => e.stopPropagation()} >
        <span class = "title">Регистрация</span>
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
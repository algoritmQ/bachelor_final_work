import './RegForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect';
import { useState } from 'react';
import axiosInstance from '../../api/api';
import Spin from '../Spin/Spin';
import { useAppContext } from '../../context/AppContext';

function RegForm(props) {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const { setError, setErrorMessage } = useAppContext();

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
        console.log(error.request.status);
        setErrorMessage('Неверные данные');
        setError(1);
        setTimeout(() => {
          setError(-1);
        }, 2000)
      });
    } else {
        setErrorMessage('Пароли не совпадают');
        setError(1);
        setTimeout(() => {
          setError(-1);
          setTimeout(() => {
            setErrorMessage('Неверные данные!');
          }, 1100)
        }, 2000)
      }
    setLoading(false);
  }

  return (
    <>
    {loading && <Spin />}
    <form>
      <div className="regForm" onClick={e => e.stopPropagation()} >
        <span className="title">Регистрация</span>
          <input maxlength = "12" className = "font-roboto" placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}/>
          <input maxlength = "16" className = "font-roboto" placeholder='Имя' value={name} onChange={e => setName(e.target.value)}/>
          <input maxlength = "16" className = "font-roboto" placeholder='Фамилия' value={surname} onChange={e => setSurname(e.target.value)}/>
          <input className = "font-roboto" placeholder='Пароль' type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <input className = "font-roboto" placeholder='Повторите пароль' type="password" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)}/>
          <input maxlength = "16" className = "font-roboto" placeholder='Город' value={city} onChange={e => setCity(e.target.value)}/>
          <div onClick={createUser} style = {{cursor: 'pointer'}}><BtnBlue38Rect name = "Зарегистрироваться"/></div>
      </div>
    </form>
    </>
  );
}

export default RegForm;
import './EditProfilePage.css';
import '../.././index.css';
import BtnBlueRounded from '../../components/buttons/BtnBlueRounded';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

function EditProfilePage(props) {
  const user = useSelector(store => store.user.user);

  const [login, setLogin] = useState(user.username);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [city, setCity] = useState(user.city);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [newPassword, setNewPassword] = useState('');

  async function processClick() {
    // ЗАПРОС
  }

  return (
    <div className="editProfilePage">
         {/*<div className = "profile-leftBar"></div>*/}
         <div className="profile-rightBar">
            <div className="profile-rightBar-title">
                Редактирование профиля
            </div>
            <div className="profile-rightBar-fields">
                <div className="profile-rightBar-fields-names">
                  <span>Логин</span>
                  <span>Имя</span>
                  <span>Фамилия</span>
                  <span>Пароль</span>
                  <span>Город</span>
                  <span>Телефон</span>
                </div>
                <div className="profile-rightBar-fields-inputs">
                  <input placeholder="username" value={login} onChange={(e) => setLogin(e.target.value)} />
                  <input placeholder="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input placeholder="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  <input type='password' placeholder="Новый пароль" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                  <input placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} />
                  <input placeholder="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
            </div>
            <div className="profile-rightBar-bottom">
            <div style={{cursor:'pointer'}} onClick={processClick}><BtnBlueRounded name="Обновить данные"/></div>
            </div>

         </div>
    </div>
  );
}

export default EditProfilePage;
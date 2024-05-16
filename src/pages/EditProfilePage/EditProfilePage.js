import './EditProfilePage.css';
import '../.././index.css';
import BtnBlueRounded from '../../components/buttons/BtnBlueRounded';

import { Link } from 'react-router-dom';

function EditProfilePage(props) {
  return (
    <div className = "editProfilePage">
         {/*<div className = "profile-leftBar"></div>*/}
         <div className = "profile-rightBar">
            <div className = "profile-rightBar-title">
                Редактирование профиля
            </div>
            <div className = "profile-rightBar-fields">
                <div className = "profile-rightBar-fields-names">
                  <span>Логин</span>
                  <span>Имя</span>
                  <span>Фамилия</span>
                  <span>Пароль</span>
                  <span>Город</span>
                  <span>Телефон</span>
                </div>
                <div className = "profile-rightBar-fields-inputs">
                  <input placeholder = "username" />
                  <input placeholder = "first_name"/>
                  <input placeholder = "last_name"/>
                  <input placeholder = "Новый пароль"/>
                  <input placeholder = "city"/>
                  <input placeholder = "phone_number"/>
                </div>
            </div>
            <div className = "profile-rightBar-bottom">
            <div style = {{cursor:'pointer'}}><BtnBlueRounded name = "Обновить данные"/></div>
            </div>

         </div>
    </div>
  );
}

export default EditProfilePage;
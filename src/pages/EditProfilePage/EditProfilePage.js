import './EditProfilePage.css';
import '../.././index.css';
import BtnBlueRounded from '../../components/buttons/BtnBlueRounded';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/api';
import { setUser } from '../../store/reducers/userReducer';
import { useNavigate } from 'react-router';
import Spin from '../../components/Spin/Spin';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';


function EditProfilePage(props) {
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(user.username);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [city, setCity] = useState(user.city);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setError, setErrorMessage } = useAppContext();
  
  //ОБРАБОТАТЬ 500 от маха
  async function processClick() {
    //setLoading(true);
    await axiosInstance.patch('users/me/', {
      username: login,
      first_name: firstName,
      last_name: lastName,
      city,
      phone_number: phoneNumber,
      email: email
    })
    .then(() => {
      (async () => {
        await axiosInstance.get('/users/me/')
        .then(response => {
          dispatch(setUser(response.data));
          navigate('/MainPage');
        })
        .catch(error => {
          console.error(error)
        })
        //.finally(() => {
        //  setLoading(false);
        //})
        })();
    })
    .catch(error => {
      console.log(error.request.status);
      setErrorMessage('Неверные данные');
      setError(1);
      setTimeout(() => {
        setError(-1);
      }, 2000)
    });
  }

  return (
    <div className="editProfilePage">
      {loading && <Spin />}
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
                  <span>Почта</span>
                  <span>Город</span>
                  <span>Телефон</span>
                  <span>Изменить<br/> пароль</span>
                </div>
                <div className="profile-rightBar-fields-inputs">
                  <input maxlength = "12" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                  <input maxlength = "16" placeholder="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input maxlength = "16" placeholder="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  <input maxlength = "24" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input maxlength = "16" placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)} />
                  <input maxlength = "12" placeholder="Телефон" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  <div style={{cursor:'pointer'}}><Link className = "my-link" to = "/EditPassword"><BtnBlueRounded name="Обновить пароль"/></Link></div>
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

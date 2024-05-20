import './EditPassword.css';
import '../.././index.css';
import BtnBlueRounded from '../../components/buttons/BtnBlueRounded';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/api';
import { setUser } from '../../store/reducers/userReducer';
import { useNavigate } from 'react-router';
import Spin from '../../components/Spin/Spin';
import { useAppContext } from '../../context/AppContext';


function EditPassword(props) {
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setError, setErrorMessage } = useAppContext();
  
  async function processUpdatePassword() {
    //setLoading(true);
    if (newPassword !== repeatedPassword) {
      // показать оишбку
    }
    await axiosInstance.patch('users/change-passwd/', {
      old_password: password,
      new_password: newPassword,
    })
    .then(() => {
      navigate('/MainPage');
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
                Изменение пароля
            </div>
            <div className="password-rightBar-fields">
                <div className="profile-rightBar-fields-names">
                  <span>Старый пароль</span>
                  <span>Новый пароль</span>
                  <span>Повторите пароль</span>
                </div>
                <div className="profile-rightBar-fields-inputs">
                    <input className = "font-roboto" placeholder='Старый пароль' type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete='new-password' />
                    <input className = "font-roboto" placeholder='Новый пароль' type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                    <input className = "font-roboto" placeholder='Повторите пароль' type="password" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)}/>
                </div>
            </div>
            <div className="profile-rightBar-bottom">
            <div style={{cursor:'pointer'}} onClick={processUpdatePassword} ><BtnBlueRounded name="Обновить пароль"/></div>
            </div>

         </div>
    </div>
  );
}

export default EditPassword;

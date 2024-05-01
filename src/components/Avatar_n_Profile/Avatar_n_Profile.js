import '../.././index.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/userReducer';
import './Avatar_n_Profile.css'

function Avatar_n_Profile({autorized, setAutorized}) {
  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  return (
    <div class = "avatar_n_Profile">
      <div className = "avatar">
        
      </div>
      <div className = "links">
         <span id = "l1">{user.last_name}</span> <span id = "l1">{user.first_name}</span>
        <br/>
        <Link to = "/MainPage"><span id = "l2" onClick = {() => {
          dispatch(logout());
          setAutorized(false);
          }}>Выйти из профиля</span></Link>
      </div>
    </div>
  );
}

export default Avatar_n_Profile;
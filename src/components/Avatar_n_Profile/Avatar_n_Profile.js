import '../.././index.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/userReducer';
import './Avatar_n_Profile.css'

function Avatar_n_Profile({autorized, setAutorized}) {
  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  return (
    <div className="avatar_n_Profile">
      <div className = "avatar">
        
      </div>
      <div className = "links">
         <Link className = "my-link" to = "/EditProfilePage"><span id = "l1">{user.last_name} {user.first_name}</span></Link>
        <br/>
        <Link className = "my-link" to = "/MainPage"><span id = "l2" onClick = {() => {
          dispatch(logout());
          setAutorized(false);
          }}>Выйти из профиля</span></Link>
      </div>
    </div>
  );
}

export default Avatar_n_Profile;
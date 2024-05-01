import './EditProfilePage.css';
import '../.././index.css';

import { Link } from 'react-router-dom';

function EditProfilePage(props) {
  return (
    <div className = "editProfilePage">
         <div className = "profile-leftBar"></div>
         <div className = "profile-rightBar">
            <div className = "profile-rightBar-title">
                Редактирование профиля
            </div>
            <div className = "profile-rightBar-fields">
                <div className = "profile-rightBar-fields-names">

                </div>
                <div className = "profile-rightBar-fields-inputs">

                </div>
            </div>
            <div className = "profile-rightBar-bottom">

            </div>

         </div>
    </div>
  );
}

export default EditProfilePage;
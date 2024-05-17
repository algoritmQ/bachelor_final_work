import './AboutProfile.css';
import '../../index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AboutProfile({ first_name, last_name, city, phone_number, email }) {

  return (
    <div className="aboutProfile">
            <div className="topBar">
                <div className="leftBarAvatar">
                    
                </div>
                <div className="rightBar">
                    <span className="title">Информация о пользователе</span>
                    <div className="allInfo">
                        <div className="bar">
                            <span className="infoInBar">Имя</span>
                            <span className="infoInBar">Фамилия</span>    
                            <span className="infoInBar">Город</span>
                            <span className="infoInBar">Телефон</span>
                            <span className="infoInBar">Почта</span>
                        </div>
                        <div className="bar">
                            <span className="infoInBar2">{first_name}</span>
                            <span className="infoInBar2">{last_name}</span>
                            <span className="infoInBar2">{city}</span>
                            <span className="infoInBar2">{phone_number}</span>
                            <span className="infoInBar2">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
                 
    </div>
  );
}

export default AboutProfile;
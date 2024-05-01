import './ViewAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItem, resetItem } from '../../store/reducers/itemReducer';

function ViewAdPage(props) {
    const dispatch = useDispatch();
    const { item } = useSelector(store => store.item);
    const itemId = useParams().id;
    const user = useSelector(store => store.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            await axiosInstance.get(`ads_depth/${itemId}/`)
            .then(response => {
                dispatch(setItem(response.data));
            });
          }
          fetchItem();
    }, [dispatch]);
    const time = new Date(item.publication_date);
    const month = time.getUTCMonth() + 1; //months from 1-12
    const day = time.getUTCDate();
    const year = time.getUTCFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    async function goToRoom() {
        await axiosInstance.post('chats/', {
          'user_1': user.id,
          'user_2': item.user_id.id,
        })
          .then(response => {
            navigate(`/ChatPage/${response.data}`);
          })
          .catch(error => console.error(error));
      }

  return (
    <div className = "viewAdPage">
       <div className = "topBar">
            <div className = "leftTopBar">
                <span className = "nameAd"><strong>{item?.title}</strong></span>
                <div className = "photos">
                    <div className = "mainPhoto">
                        <img className ="mImg" src = {item?.photo}/>
                    </div>
                    <div className = "restPhotos">
                    </div>
                </div>
                <span className = "title2">
                    Подробности
                </span>
                <div className = "shortDescription">
                    {item?.short_description}
                </div>
            </div>
            <div className = "rightTopBar">
                <span className = "nameAd">{item?.price}, руб.</span>
                <div className = "vap-sellerBar">
                    <span className = "sellerName">{item.user_id?.first_name}</span>
                    {/*{!!(user.username!=item.user_id?.username) && <div onClick={goToRoom}><BtnBlue50Rect name = "Написать продавцу"/></div>}*/}
                </div>
                <div className = "date-n-place">
                    <span className = "rr">Город {item.user_id?.city}</span>
                    <span className = "rr">Выложено {day +'.'+ month + "." + year + " " + hours + ":" + minutes}</span>
                </div>
            </div>
       </div>
       <div className = "bottomBar">
            <div className = "titleDescription">Описание</div><br/>
            <div className = "allDescription">{item.full_description}</div>
       </div>
    </div>
  );
}

export default ViewAdPage;
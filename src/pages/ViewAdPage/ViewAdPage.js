import './ViewAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../api/api.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../../store/reducers/itemReducer';
import { addOrder } from '../../store/reducers/basketReducer';

function ViewAdPage() {
    const dispatch = useDispatch();
    const { item } = useSelector(store => store.item);
    const itemId = useParams().id;
    const user = useSelector(store => store.user.user);

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
    
    function addToBusket() {
        dispatch(addOrder(item));
        // ЗАПРОС
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
                        {!!(user.username!=item.user_id?.username) && <div onClick={addToBusket}><BtnBlue50Rect name = "Оформить заказ"/></div>}
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
import './FavoritesPage.css';
import '../../index.css';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import LilAd from '../../components/LilAd/LilAd';
import { Link } from 'react-router-dom';
import { setActiveOrders, setSoldOrders } from '../../store/reducers/basketReducer';
import { setFavourities } from '../../store/reducers/favouritiesReducer';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';
import { useAppContext } from '../../context/AppContext';

function FavoritesPage(props) {
    const [status, setStatus] = useState('status-active');
    const user = useSelector(store => store.user.user);
    const favourities = useSelector(store => store.Favourity.favourities);
    const dispatch = useDispatch();
    const { setError, setErrorMessage } = useAppContext();
    
    useEffect(() => {
        async function getFavourities() {
            await axiosInstance.get(`favorites/`)
            .then(response => {
                dispatch(setFavourities(response.data));           
            })
            .catch(error => {
                console.log(error.request.status);
                setErrorMessage('Уже в избранном');
                setError(1);
                setTimeout(() => {
                  setError(-1);
                }, 2000)
              });
        } 
        getFavourities();
    }, [dispatch]);

    return (
        <div className = "userInfoPage">
            <div className = "userInfoPage-title">
                Избранное
            </div>
            <div className = "userInfoPage-field">
                <div className = "field-left">
                    <AboutProfile first_name={user.first_name} last_name={user.last_name} city={user.city} phone_number = {user.phone_number} email={user.email}/>
                </div>
                <div className = "field-right">
                    <div className = "field-right-ads">
                        <div className = "field-right-ads-active">
                            {favourities.map(favourity => (
                                <LilAd key={favourity.id} publication_date={favourity.order_date} favourityId={favourity.id} {...favourity.ad}/>
                            ))}
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
  );
}

export default FavoritesPage;
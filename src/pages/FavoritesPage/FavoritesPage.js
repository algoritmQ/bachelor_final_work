import './FavoritesPage.css';
import '../../index.css';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import LilAd from '../../components/LilAd/LilAd';
import { Link } from 'react-router-dom';
import { setActiveOrders, setSoldOrders } from '../../store/reducers/basketReducer';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';

function FavoritesPage(props) {
    const [status, setStatus] = useState('status-active');
    const user = useSelector(store => store.user.user);
    const orders = useSelector(store => store.basket.orders);
    const dispatch = useDispatch();
    const activeOrders = useSelector(store => store.basket.activeOrders);
    const soldOrders = useSelector(store => store.basket.soldOrders);
    
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
                            {activeOrders.map(order => (
                                <LilAd key={order.id} seller={order.seller} publication_date={order.order_date} orderId={order.id} {...order.ad}/>
                            ))}
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
  );
}

export default FavoritesPage;
import './OrdersPage.css';
import '../../index.css';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import LilAd from '../../components/LilAd/LilAd';
import { Link } from 'react-router-dom';
import { setActiveAds, resetActiveAds, setSoldAds, resetSoldAds } from '../../store/reducers/adsReducer';
import { setActiveOrders, setSoldOrders } from '../../store/reducers/basketReducer';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';

function OrdersPage(props) {
    const [status, setStatus] = useState('status-active');
    const user = useSelector(store => store.user.user);
    const orders = useSelector(store => store.basket.orders);
    const dispatch = useDispatch();
    const activeOrders = useSelector(store => store.basket.activeOrders);
    const soldOrders = useSelector(store => store.basket.soldOrders);

    const handleStatus = () => {
        status === 'status-active' ? setStatus('status-outpubl') : setStatus('status-active');
    }
    const handleActive = () =>{
        setStatus('status-active');
    }
    const handleNoActive = () =>{
        setStatus('status-outpubl')
    }

    useEffect(() => {
        async function getMyOrders() {
            await axiosInstance.get(`orders/?buyer=${user.id}`)
            .then(response => {
                dispatch(setActiveOrders(response.data));           
            })
            .catch(error => console.error(error));
        } 
        async function getOrdersFromMe() {
            await axiosInstance.get(`orders/?seller=${user.id}`)
            .then(response => {
                dispatch(setSoldOrders(response.data));
            })
            .catch(error => console.error(error));
        }
        getMyOrders();
        getOrdersFromMe();
    }, [dispatch]);
    
    return (
        <div className = "userInfoPage">
            <div className = "userInfoPage-title">
                Заказы
            </div>
            <div className = "userInfoPage-field">
                <div className = "field-left">
                    <AboutProfile first_name={user.first_name} last_name={user.last_name} city={user.city} phone_number = {user.phone_number} email={user.email}/>
                </div>
                <div className = "field-right">
                    <div className = "field-right-title">
                        <div onClick = {handleActive}>
                            {!!(status == 'status-outpubl') ? (<span>Мои заказы</span>) : 
                            (<span><strong>Мои заказы</strong></span>)}
                        </div>
                        <div onClick = {handleNoActive}>
                            {!!(status == 'status-active') ? (<span>Заказаны у меня</span>) : 
                            (<span><strong>Заказаны у меня</strong></span>)}
                        </div>
                    </div>
                    <div className = "field-right-ads">
                        {!!(status == 'status-active') && <div className = "field-right-ads-active">
                            {!!activeOrders && activeOrders.map(order => (
                                <LilAd key={order.id} seller={order.seller} publication_date={order.order_date} orderId={order.id} {...order.ad}/>
                            ))}
                        </div>}
                        {!!(status == 'status-outpubl') && <div className = "field-right-ads-out-publ">
                            {!!soldOrders && soldOrders.map(order => (
                                <LilAd key={order.id} isSold={true} seller={order.seller} publication_date={order.order_date} {...order.ad}/>
                            ))}
                        </div>}                   
                    </div>
                </div>
            </div>
        </div>
  );
}

export default OrdersPage;
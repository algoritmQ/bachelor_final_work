import React, {useEffect, useState} from 'react';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import './LilAd.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeActiveOrder } from '../../store/reducers/basketReducer';
import axiosInstance from '../../api/api';

function LilAd(props) {
    const dispatch = useDispatch();
    const time = new Date(props.publication_date);
    const month = time.getUTCMonth() + 1;
    const day = time.getUTCDate();
    const year = time.getUTCFullYear();

    async function deleteOrder() {
      await axiosInstance.delete(`orders/${props.orderId}/`)
      .catch(error => console.error(error));

      dispatch(removeActiveOrder(props.orderId));
    }

    return (
      <div className="lilAd">
        <Link to={`/ViewAdPage/${props.id}`}><div className="avatarField"> <img className="mImg" src={props?.photo}/> </div></Link>
        <span className="nameAd" style={{fontSize:'16px'}}>{props.title.length > 25 ? `${props.title.substring(0, 25)}...` : props.title}</span>
        <span className="priceAd" style={{fontSize:'14px'}}>{props.price}, руб.</span>
        <span className="addressAd" style={{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>{props.city}</span>
        <span className="timeAd" style={{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>{day +'.'+ month + "." + year}</span>
        {!!(props.flag == "User") &&<Link to = {`/ChangeAdPage/${props.id}`}><BtnBlcknWRect name ="Редактировать"/></Link>}
        {props.seller && <span style={{fontSize:'14px', color:'rgba(0,0,0,0.5)'}}>{props.seller.first_name}</span>}
        {props.seller && !props.isSold && <div onClick={deleteOrder} style={{'cursor': 'pointer'}}><BtnBlcknWRect name ="Удалить заказ"/></div>}
      </div>
    );
  }
  
  export default LilAd;
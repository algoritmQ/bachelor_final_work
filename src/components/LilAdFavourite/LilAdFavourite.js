import React, {useEffect, useState} from 'react';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import './LilAdFavourite.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavourity } from '../../store/reducers/favouritiesReducer';
import axiosInstance from '../../api/api';

function LilAdFavourite(props) {
    const dispatch = useDispatch();
    const time = new Date(props.publication_date);
    const month = time.getUTCMonth() + 1;
    const day = time.getUTCDate();
    const year = time.getUTCFullYear();
    
    async function deleteFavourite() {
      await axiosInstance.delete(`favorites/${props.favourityId}/`)
      .catch(error => console.error(error));

      dispatch(removeFavourity(props.favourityId));
    }

    return (
      <div className="lilAd">
        <Link to={`/ViewAdPage/${props.id}`}><div className="avatarField"> <img className="mImg" src={props?.photo}/> </div></Link>
        <span className="nameAd" style={{fontSize:'16px'}}>{props.title.length > 25 ? `${props.title.substring(0, 25)}...` : props.title}</span>
        <span className="priceAd" style={{fontSize:'14px'}}>{props.price}, руб.</span>
        <span className="timeAd" style={{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>{day +'.'+ month + "." + year}</span>
        <span style={{fontSize:'14px', color:'rgba(0,0,0,0.5)'}}>{props.user_id.first_name}</span>
        <div onClick={deleteFavourite} style={{'cursor': 'pointer'}}><BtnBlcknWRect name ="Убрать из избранного"/></div>
      </div>
    );
  }
  
  export default LilAdFavourite;
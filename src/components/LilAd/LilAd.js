import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import './LilAd.css';
import { Link } from 'react-router-dom';

function LilAd(props) {
    const time = new Date(props.publication_date);
    const month = time.getUTCMonth() + 1;
    const day = time.getUTCDate();
    const year = time.getUTCFullYear();
    return (
      <div class = "lilAd">
        <Link to = {`/ViewAdPage/${props.id}`}><div className = "avatarField"> <img className ="mImg" src = {props?.photo}/> </div></Link>
        <span className = "nameAd" style = {{fontSize:'16px'}}>{props.title}</span>
        <span className = "priceAd" style = {{fontSize:'14px'}}>{props.price}, руб.</span>
        <span className = "addressAd" style = {{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>{props.city}</span>
        <span className = "timeAd" style = {{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>{day +'.'+ month + "." + year}</span>
        <Link to = {`/ChangeAdPage/${props.id}`}><BtnBlcknWRect name ="Редактировать"/></Link>
      </div>
    );
  }
  
  export default LilAd;
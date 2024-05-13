import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { setAds, resetAds } from '../../store/reducers/adsReducer';


import LargeAd from '../../components/LargeAd/LargeAd';
import '../../App.css';
import '../../index.css';
import RegForm from '../../components/RegForm/RegForm';
import EnterForm from '../../components/EnterForm/EnterForm';
import axiosInstance from '../../api/api.js';

import { useAppContext } from '../../context/AppContext';


function MainPage(props) {
  const dispatch = useDispatch();
  const ads = useSelector(store => store.ads.ads);

  const { setInput, input, click, select, setSelect, minPrice, setminPrice, maxPrice, setmaxPrice, city, setCity } = useAppContext();
 
  useEffect(() => {
      const fetchAds = async () => {
        const query = input ? input : '';
        const city_filter = city ? city : '';
        const minPrice_filter = minPrice ? minPrice : '';
        const maxPrice_filter = maxPrice ? maxPrice : '';
        const select_filter = select ? select : '';
        // await axiosInstance.get(`ads/?min_p=${minPrice_filter}&max_p=${maxPrice_filter}&city=${city_filter}&title=${query}&category_id=${select_filter}`)
        await axiosInstance.get(`ads/`)
        .then(response => {
          dispatch(setAds(response.data
            .filter(elem => elem.status.name === 'Active')));
              setInput('');
              setminPrice('');
              setmaxPrice('');
              setCity('');
              setSelect(null);
        });
      }
      fetchAds();
  }, [dispatch, click]);

  return (
    <div className="bodyWrapper"> 
      <div className="mainContent">

        {ads.map(ad => (
          <LargeAd key={ad.id} {...ad}/>
        ))}
              
      </div>            
    </div>
  );
}

export default MainPage;
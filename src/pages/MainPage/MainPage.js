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


function MainPage(props) {
  const dispatch = useDispatch();
  const ads = useSelector(store => store.ads.ads);
 
  useEffect(() => {
      const fetchAds = async () => {
        const query = props.input ? props.input : '';
        const city_filter = props.city ? props.city : '';
        const minPrice_filter = props.minPrice ? props.minPrice : '';
        const maxPrice_filter = props.maxPrice ? props.maxPrice : '';
        //await axiosInstance.get(`ads_depth/?title=${query}&city=${props.city}&min_p=${props.minPrice}&max_p=${props.maxPrice}`)
        await axiosInstance.get(`ads_depth/?min_p=${minPrice_filter}&max_p=${maxPrice_filter}&city=${city_filter}&title=${query}`)
        .then(response => {
          dispatch(setAds(response.data
            .filter(elem => elem.status === 'A')));
            props.setInput('');
            props.setminPrice('');
            props.setmaxPrice('');
            props.setCity('');
        });
      }
      fetchAds();
      
  }, [dispatch, props.click]);

  const[user, setUser] = useState(false);
  return (
    <div class = "bodyWrapper"> 
      <div class = "mainContent">

        {ads.map(ad => (
          <LargeAd key={ad.id} {...ad}/>
        ))}
              
      </div>            
    </div>
  );
}

export default MainPage;
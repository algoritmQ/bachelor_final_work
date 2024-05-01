import './UserInfoPage.css';
import '../../index.css';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import LilAd from '../../components/LilAd/LilAd';
import { Link } from 'react-router-dom';
import { setActiveAds, resetActiveAds, setSoldAds, resetSoldAds } from '../../store/reducers/adsReducer';

import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';

function UserInfoPage(props) {
    const [status, setStatus] = useState('status-active');
    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();
    const activeAds = useSelector(store => store.ads.activeAds);
    const soldAds = useSelector(store => store.ads.soldAds);

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
        async function getMyAds() {
            await axiosInstance.get(`ads/?user_id=${user.id}`)
            .then(response => {  
                const filteredActiveAds = response.data.filter(element => element.status === 'A');
                const filteredSoldAds = response.data.filter(element => element.status === 'S');
                
                dispatch(setActiveAds(filteredActiveAds));
                dispatch(setSoldAds(filteredSoldAds));            
            })
            .catch(error => console.error(error));
        }

        getMyAds();


    }, [dispatch]);
    
  return (
    <div className = "userInfoPage">
        <div className = "userInfoPage-title">
            Профиль и объявления
        </div>
        <div className = "userInfoPage-field">
            <div className = "field-left">
                <AboutProfile/>
            </div>
            <div className = "field-right">
                <div className = "field-right-title">
                    <div onClick = {handleActive}>
                        {!!(status == 'status-outpubl') ? (<span>Активные</span>) : 
                        (<span><strong>Активные</strong></span>)}
                    </div>
                    <div onClick = {handleNoActive}>
                        {!!(status == 'status-active') ? (<span>Снятые с публикации</span>) : 
                        (<span><strong>Снятые с публикации</strong></span>)}
                    </div>
                </div>
                <div className = "field-right-ads">
                    {!!(status == 'status-active') && <div className = "field-right-ads-active">
                        {!!activeAds && activeAds.map(ad => (
                            <LilAd key={ad.id} {...ad}/>
                        ))}
                    </div>}
                    {!!(status == 'status-outpubl') && <div className = "field-right-ads-out-publ">
                        {!!soldAds && soldAds.map(ad => (
                            <LilAd key={ad.id} {...ad}/>
                        ))}
                    </div>}                   
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserInfoPage;
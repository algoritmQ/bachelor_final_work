import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAds } from '../../store/reducers/adsReducer';
import LargeAd from '../../components/LargeAd/LargeAd';
import '../../App.css';
import '../../index.css';
import axiosInstance from '../../api/api.js';
import { setActiveOrders } from '../../store/reducers/basketReducer';
import { setFavourities } from '../../store/reducers/favouritiesReducer.js';
import { useAppContext } from '../../context/AppContext';

function MainPage() {
  const dispatch = useDispatch();
  const ads = useSelector(store => store.ads.ads);
  const user = useSelector(store => store.user.user);

  const { setInput, input, click, select, setSelect, minPrice, setminPrice, maxPrice, setmaxPrice, city, setCity } = useAppContext();
 
  useEffect(() => {
      const fetchAds = async () => {
        const query = input ? input : '';
        const city_filter = city ? city : '';
        const minPrice_filter = minPrice ? minPrice : '';
        const maxPrice_filter = maxPrice ? maxPrice : '';
        const select_filter = select ? select : '';
        await axiosInstance.get(`ads/?min_p=${minPrice_filter}&max_p=${maxPrice_filter}&city=${city_filter}&search=${query}&category=${select_filter}`)
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

      const fetchOrders = async () => {
        await axiosInstance.get(`orders/?buyer=${user.id}`)
            .then(response => {  
                dispatch(setActiveOrders(response.data));      
            })
            .catch(error => console.error(error));
      }

      async function fetchFavourities() {
        await axiosInstance.get(`favorites/`)
        .then(response => {
            dispatch(setFavourities(response.data));           
        })
        .catch(error => { console.error(error) });
    } 

      fetchAds();
      fetchOrders();
      fetchFavourities();
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
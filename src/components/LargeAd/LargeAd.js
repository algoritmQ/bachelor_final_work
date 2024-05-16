
import './LargeAd.css';
import '../.././index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';
import { setActiveOrders, setSoldOrders, incActiveOrders } from '../../store/reducers/basketReducer';

function LargeAd(props) {
  const time = new Date(props.publication_date);
  const month = time.getUTCMonth() + 1; //months from 1-12
  const day = time.getUTCDate();
  const year = time.getUTCFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();

  async function addToBusket() {
    await axiosInstance.post('orders/', {
      ad: props.id,
    });

    dispatch(incActiveOrders());
  }
  
  return (
    <div className="largeAd">
      <div className = "avatarBar">
        <div className = "avatarPhoto">
          <img className ="mImg" src = {props?.photo}/>
        </div>
        <div className = "bottomBar">
            <span>город {props.user_id.city}</span>
            <span> Выложено <span className = "dateTime">
              {day +'.'+ month + "." + year + " " + hours + ":" + minutes}
              </span></span>
        </div>
      </div>
      <div className = "informationBar">
        <div className = "topBar">
          <div>
              <Link to = {`/ViewAdPage/${props.id}`} className = "my-link">
                <div className="price_n_name">
                    <span className = "adName"><strong>{props.title}</strong></span>
                    <span className = "adPrice"><strong>{props.price}</strong></span>
                </div>
              </Link>
              <div className = "shortDescription">
                {props.short_description}
              </div>                 
          </div>
          <div className = "sellerBar">
            <span className = "sellerName"><span>{props.user_id.first_name}</span></span>
            {!!(props.user_id.id != user.id) && <div onClick={addToBusket}><Link><BtnBlcknWRect name = "Оформить заказ"/></Link></div>}
          </div>          
        </div>
          <div className = "category_ad">
            {props.category.title}
          </div> 
        <div className = "generalDescription">
          {props.full_description}
        </div>
      </div>
    </div>
  );
}

export default LargeAd;

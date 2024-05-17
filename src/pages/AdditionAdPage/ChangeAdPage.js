import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api.js';
import { setCategories } from '../../store/reducers/categoriesReducer';

import './AdditionAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link, useParams } from 'react-router-dom';
import BtnGreyRect from '../../components/buttons/BtnGreyRect';
import BtnRedRect from '../../components/buttons/BtnRedRect';
import Select from 'react-select';
import { setItem } from '../../store/reducers/itemReducer.js';


function ChangeAdPage(props) {
    const dispatch = useDispatch();
    const adsId = useParams().id;
    const { item } = useSelector(store => store.item);
    const navigate = useNavigate();
    let arrCategories = []; 
    let statusName = 0;
    const { categories } = useSelector(store => store.categories);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('');
    const [photo, setPhoto] = useState(null);
    
    function appendCat(v, l){ 
      const cat = {value: v, label: l};
      arrCategories.push(cat);
    }
    categories.forEach(element => appendCat(element.id, element.title)); 
    
    async function updateItem() {
      const categoryId = arrCategories.findIndex(element => element.label === category) + 1;
      const formData = new FormData();
      formData.append('title', name);
      formData.append('category', categoryId);
      formData.append('price', price);
      formData.append('short_description', shortDescription);
      formData.append('full_description', fullDescription);
      formData.append('status', status);
      if (photo) {
        formData.append('photo', photo);
      }
      //formData.append('photo', image)
    //   await axiosInstance.put(`ads/${adsId}/`, {
    //   'title': name,
    //   'category': categoryId,  
    //   'price': price,
    //   'short_description': shortDescription,
    //   'full_description': fullDescription,
    // })
    await axiosInstance.patch(`ads/${adsId}/`, formData)
    // .then(response => console.log(response))
    .then(setTimeout(() => {
      navigate('/UserInfoPage')
    }, 75))
    .catch(error => console.error);
  }
  async function soldItem() {
    const categoryId = arrCategories.findIndex(element => element.label === category) + 1;
    const formData = new FormData();
    formData.append('title', name);
    formData.append('category', categoryId);
    formData.append('price', price);
    formData.append('short_description', shortDescription);
    formData.append('full_description', fullDescription);
    formData.append('status', 2);//статус
    //formData.append('photo', image)
  //   await axiosInstance.put(`ads/${adsId}/`, {
  //   'title': name,
  //   'category': categoryId,  
  //   'price': price,
  //   'short_description': shortDescription,
  //   'full_description': fullDescription,
  // })
  await axiosInstance.patch(`ads/${adsId}/`, formData)
  // .then(response => console.log(response))
  .then(setTimeout(() => {
    navigate('/UserInfoPage')
  }, 75))
  .catch(error => console.error);
}

async function activeItem() {
  const categoryId = arrCategories.findIndex(element => element.label === category) + 1;
  const formData = new FormData();
  formData.append('title', name);
  formData.append('category', categoryId);
  formData.append('price', price);
  formData.append('short_description', shortDescription);
  formData.append('full_description', fullDescription);
  formData.append('status', 1);//статус
  //formData.append('photo', image)
//   await axiosInstance.put(`ads/${adsId}/`, {
//   'title': name,
//   'category': categoryId,  
//   'price': price,
//   'short_description': shortDescription,
//   'full_description': fullDescription,
// })
  await axiosInstance.patch(`ads/${adsId}/`, formData)
  // .then(response => console.log(response))
  .then(setTimeout(() => {
    navigate('/UserInfoPage')
  }, 75))
  .catch(error => console.error)
}

    async function deleteItem() {
      await axiosInstance.delete(`ads/${adsId}/`, {    })
    // .then(response => console.log(response))
    // .then()
    .catch(error => console.error);
  }
  useEffect(() => {
    const fetchCategories = async () => {
      await axiosInstance.get('categories/')
      .then(response => {
        dispatch(setCategories(response.data));
      });
    }
    const fetchStatuses = async () => {
      await axiosInstance.get('statuses/')
      .then(response => {
        dispatch(setStatus(response.data));
      });
    }
    const fetchItemById = async (adId) => {
      await axiosInstance.get(`ads/${adId}/`)
        .then(response => {
          dispatch(setItem(response.data));
          
          setName(response.data.title);
          setPrice(response.data.price);
          setShortDescription(response.data.short_description);
          setFullDescription(response.data.full_description);
          setCategory(response.data.category);         
          setImage(response.data.photo);
          setStatus(response.data.status);
          statusName = response.data.status;
          //status = response.data.status
          //alert(response.data.status.name);
          //statusItem
        })
        .catch(error => console.error(error));
    }
    fetchStatuses();
    fetchCategories();
    fetchItemById(adsId);
  }, [dispatch]);
  
  return (
      <div class = "additionAdPage">
        <form encType='multipart/form-data'>
        <div className = "title">Редактирование объявления</div>
        <div className = "addField">
          <div className = "topBar">
            <div className = "names">
              <div className = "oneField">Категория</div>
              <div className = "oneField">Название</div>
              <div className = "oneField">Цена</div>
              <div className = "bigField">Фотографии</div>
            </div>
            <div className = "fields">
              <div className = "oneField2">               
                <Select id = "my-select"
                  className="input-cont"
                  //placeholder= {arrCategories[category - 1]?.label}
                  placeholder= {category.title}
                  options={arrCategories}
                  value={category.title}
                  label = {category.title}
                  //selected = {category}
                  onChange={e => setCategory(e.label)}   
                />               
              </div>
              <div className = "oneField2">
                <input placeholder = "name" value={name} onChange={e => setName(e.target.value)}/>
              </div>
              <div className = "oneField2"><input placeholder = "price" value={price} onChange={e => setPrice(e.target.value)}/></div>
              <div className = "bigField2">
                <div className = "knopka">
                  <label for = "addImage">
                    <BtnGreyRect/>
                  </label>
                  <input
                    id = "addImage"
                    type ="file"
                    name = "addImage"
                    onChange={e => {
                      const file = e.target.files[0];
                      setPhoto(file);
                      const reader = new FileReader();
                      reader.onload = () => {
                        setImage(reader.result);
                      }
                      if (file) {
                        reader.readAsDataURL(file);
                      } 
                    }}  
                  />

                </div>
                <div className = "fieldPhotos">
                  <div className = "onePhoto"><img src = {image}/></div>
                </div>

              </div>
            </div>
          </div>
          <div className = "textAreas">
            <div className = "shortDescription">
              <span>Краткое описание</span>
              <textarea value={shortDescription} onChange={e => setShortDescription(e.target.value)}></textarea>
            </div>
            <div className = "largeDescription">
              <span>Подробное описание</span>
              <textarea value={fullDescription} onChange={e => setFullDescription(e.target.value)}></textarea>     
              <div onClick={updateItem}><BtnBlue50Rect name = "Обновить объявление" widd = "210px"/></div>
              {/*<div onClick={deleteItem} className = "deleteBtn"><BtnRedRect name = "Снять с публикации" widd = "140px"/></div>
              */}
              {/*<div onClick={soldItem} className = "deleteBtn"><BtnRedRect name = "Снять с публикации" widd = "140px"/></div>*/}
              {!!(status == 1) && <div onClick={soldItem} className = "deleteBtn"><BtnRedRect name = "Снять с публикации" widd = "140px"/></div>} 
              {!!(status == 2) && <div onClick={activeItem} className = "deleteBtn"><BtnRedRect name = "Опубликовать" widd = "100px"/></div>}
              
            </div>           
          </div>
        </div>
        </form>
      </div>
    );
}

export default ChangeAdPage;
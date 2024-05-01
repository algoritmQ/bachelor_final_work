import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { setUser } from './store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import './index.css';
import Header from './components/Header/Header';
import HeaderReg from './components/Header/HeaderReg';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import RegForm from './components/RegForm/RegForm';
import EnterForm from './components/EnterForm/EnterForm';

import LargeAd from './components/LargeAd/LargeAd';
import LilAd from './components/LilAd/LilAd';
import ViewAdPage from './pages/ViewAdPage/ViewAdPage';
import AdditionAdPage from './pages/AdditionAdPage/AdditionAdPage';
import ChangeAdPage from './pages/AdditionAdPage/ChangeAdPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import AnotherUserInfoPage from './pages/UserInfoPage/AnotherUserInfoPage';
import MainPage from './pages/MainPage/MainPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import axiosInstance from './api/api';


export const App = () => {
  const dispatch = useDispatch();
  const [autorized, setAutorized] = useState(useSelector(store => store.user.autorized));
  const [input, setInput] = useState('');
  const [click, setClick] = useState(0);
  const [select, setSelect] = useState('');
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    async function getMe() {
      await axiosInstance.get('api/whoami/')
      .then(response => {
        dispatch(setUser(response.data.data));
        setAutorized(true);
      })
      .catch(error => console.error(error));
    }
      if (localStorage.getItem('access')) {
        getMe();        
      }
  }, [dispatch]); //, autorized

  return (
    <div class = "bodyWrapper"> 
      {autorized ? 
        <HeaderReg autorized={autorized} setAutorized = {setAutorized}/> : 
        <Header autorized={autorized} setAutorized = {setAutorized} />
      }
      <Header2 setInput = {setInput} input = {input} setClick = {setClick} click = {click}
               select = {select} setSelect = {setSelect} minPrice = {minPrice} setminPrice = {setminPrice}
               setmaxPrice = {setmaxPrice} city = {city} setCity = {setCity}
      /> 
      
      <div class = "mainContent">
        <Routes>
         <Route path = '/MainPage' element = {<MainPage city = {city} minPrice={minPrice} maxPrice={maxPrice} 
                        setminPrice = {setminPrice} setmaxPrice = {setmaxPrice} setCity ={setCity}
                        setInput = {setInput} input = {input} setClick = {setClick} click = {click}
                        />} 
          /> 
         <Route path = '/RegForm' element = {<RegForm/>} />
         <Route path = '/EnterForm' element = {<EnterForm/>} />
         <Route path = '/ViewAdPage/:id' element = {<ViewAdPage/>} />

         <Route path = '/AdditionAdPage' element = {<AdditionAdPage/>} />
         <Route path = '/ChangeAdPage/:id' element = {<ChangeAdPage/>} />
         <Route path = '/UserInfoPage' element = {<UserInfoPage/>} />
         <Route path = '/AnotherUserInfoPage/:id' element = {<AnotherUserInfoPage/>} />
         
        </Routes>
              
      </div>
      <Footer/>
      
    </div>
  );
};

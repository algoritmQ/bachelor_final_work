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
import OrdersPage from './pages/OrdersPage/OrdersPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import AnotherUserInfoPage from './pages/OrdersPage/OrdersPage';
import MainPage from './pages/MainPage/MainPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import axiosInstance from './api/api';

import { AppProvider } from './context/AppContext';
import Spin from './components/Spin/Spin';

export const App = () => {
  const dispatch = useDispatch();
  const [autorized, setAutorized] = useState(useSelector(store => store.user.autorized));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMe() {
      await axiosInstance.get('/users/me/')
      .then(response => {
        dispatch(setUser(response.data));
        setAutorized(true);
      })
      .catch(error => console.error(error));
    }

    if (localStorage.getItem('access')) {
      setLoading(true);
      getMe();        
      setLoading(false);
    }
      // ЗАПРОС ЗА КОРЗИНОЙ
  }, [dispatch]); //, autorized

  return (
    <AppProvider>
      {loading && <Spin />}
      <div className="bodyWrapper"> 
        {autorized ? 
          <HeaderReg autorized={autorized} setAutorized = {setAutorized}/> : 
          <Header autorized={autorized} setAutorized = {setAutorized} />
        }
        <Header2 /> 
        
        <div className="mainContent">
          <Routes>
            <Route path = '/MainPage' element = {<MainPage />} /> 
            <Route path = '/RegForm' element = {<RegForm/>} />
            <Route path = '/EnterForm' element = {<EnterForm/>} />
            <Route path = '/ViewAdPage/:id' element = {<ViewAdPage/>} />
            <Route path = '/AdditionAdPage' element = {<AdditionAdPage/>} />
            <Route path = '/ChangeAdPage/:id' element = {<ChangeAdPage/>} />
            <Route path = '/UserInfoPage' element = {<UserInfoPage/>} />
            <Route path = '/OrdersPage' element = {<OrdersPage/>} />
            <Route path = '/AnotherUserInfoPage/:id' element = {<AnotherUserInfoPage/>} />
          
          </Routes>
                
        </div>
        <Footer/>
        
      </div>
    </AppProvider>
  );
};

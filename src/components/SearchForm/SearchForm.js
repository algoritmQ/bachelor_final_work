import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import axiosInstance from '../../api/api.js';
import { setCategories } from '../../store/reducers/categoriesReducer';
import { useAppContext } from '../../context/AppContext';

const DivSearchForm = styled.div`
  display: flex;
  width: 275px;
  height: 290px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap:10px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  select{
    height:30px;
    width:206px;
  }
  #regSelect{
    height:30px;
    width:206px;
    font-size:15px;
  }
  span{
    font-size:20px;
  }
  input{
    height:35px;
    width:206px;
  }
  select{
    height:35px;
    width:206px;
    border-radius:4px;
    border:0.3px solid silver;
  }
  .priceInputs{
    width:206px;
    height:40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  .lilInput{
    width:90px;
    height:35px;

  }
  .tsena{
    display:flex;
    width:205px;
    height:20px;
  }
  .searchForm-input{
    width:200px;
  }
`;

const SearchForm = (props) => {
  const { categories } = useSelector(store => store.categories);
  const dispatch = useDispatch();
  let arrCategories = [];
  const { select, setSelect, minPrice, setminPrice, maxPrice, setmaxPrice, city, setCity } = useAppContext();

  useEffect(() => {
    const fetchCategories = async () => {
      await axiosInstance.get('categories/')
      .then(response => {
        dispatch(setCategories(response.data));
      });
    }
    fetchCategories();
}, [dispatch]);
  function appendCat(v, l){
    const cat = {value: v, label: l};
    arrCategories.push(cat);
  }
  categories.forEach(element => appendCat(element.id, element.name)); 

  return (
    <form>
      <DivSearchForm>
          <span>Парамерты поиска</span>
            <Select 
              onChange={(e) => setSelect(e.value)}
              id="regSelect"
              placeholder= "Категория"
              options={arrCategories}
              value={select ? arrCategories[select - 1] : select}
            />
              <div className = "tsena">
                <span style = {{fontSize: '16px', color:'rgba(0,0,0,0.9)'}}>Цена</span>
              </div>
              <div className = 'priceInputs'>
                <input value={minPrice} onChange={e => setminPrice(e.target.value)} className = 'lilInput minPriceInput' type='text' placeholder = 'от'/>
                <input value={maxPrice} onChange={e => setmaxPrice(e.target.value)} className = 'lilInput maxPriceInput' type='text' placeholder = 'до'/>
              </div>
              <input value={city} onChange={e => setCity(e.target.value)} className = "searchForm-input cityInput" type='text' placeholder = 'Город'/>
      </DivSearchForm>
    </form>
  );
};

export default SearchForm;
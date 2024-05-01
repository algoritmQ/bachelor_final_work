import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../SearchForm/SearchForm';

const SearchFormhere = styled.div`
  position:absolute;
  right:11%;
  top:163px;
  display:flex;
  width:275px;
  height:290px;
  background-color:#F7F7F7;
  
`;
const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  margin-right: 0px;
  outline: 0;
  border: 0;
  padding: 0px;
  background: none;
  cursor: pointer;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 30px;
  height: 5px;
  margin-bottom: 7px;
  background-color: rgba(0,0,0,0.7);
`;

const HamburgerButton = (props) => {
  const[zInd, setzInd] = useState(-1);
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => setzInd((-1)*zInd)}>
        <MenuButton>
          <Bar />
          <Bar />
          <Bar />
        </MenuButton>
      </div>
      <SearchFormhere style = {{zIndex:zInd}}>
        <SearchForm
          select = {props.select} setSelect = {props.setSelect} minPrice = {props.minPrice} setminPrice = {props.setminPrice}
          setmaxPrice = {props.setmaxPrice} maxPrice = {props.maxPrice} city = {props.city} setCity = {props.setCity}
        />
      </SearchFormhere>
    </>
  );
};

export default HamburgerButton;
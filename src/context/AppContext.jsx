import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [click, setClick] = useState(0);
  const [select, setSelect] = useState('');
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [city, setCity] = useState('');

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        click,
        setClick,
        select,
        setSelect,
        minPrice,
        setminPrice,
        maxPrice,
        setmaxPrice,
        city,
        setCity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

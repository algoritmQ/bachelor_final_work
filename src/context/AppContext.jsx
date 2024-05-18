import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(null);
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(-1);
  const [errorMessage, setErrorMessage] = useState('');

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
        error,
        setError,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

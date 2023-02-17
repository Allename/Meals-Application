import axios from 'axios';
import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({children}) => {
  const fetchMeals = async (url) => {
    try{
      const {data} = await axios(url)
      console.log(data.meals)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])

  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}
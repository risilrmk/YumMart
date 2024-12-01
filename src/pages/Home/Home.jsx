import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      <AppDownload/>
    </div>
  )
}

export default Home

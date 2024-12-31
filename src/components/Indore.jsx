import React, { useState } from 'react'
import Card from './Card';
import { useParams } from 'react-router-dom';

function Indore() {
 
 
  const {city} = useParams() 
  // console.log(params)
 
 return (
<Card data2={city}/>
  )
}

export default Indore
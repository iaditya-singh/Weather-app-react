
import React, { useState } from 'react'


function weather() {


  const [city,setCity] =useState("");
  const [weather, setWeather]= useState()

  const handlechange = (e)=>{
setCity(e.target.value)

  }
const fetchweather = async() =>{
  const response =await fetch(`
http://api.weatherapi.com/v1/current.json?key=1519ea44e238413aa9481023242711&q=${city}&aqi=no`)
  
const data = await response.json()
// console.log(data)
 setWeather(data)


}

const handleclick =(e)=>{

  fetchweather(e)

}
console.log(weather , "weather")

  return (
    <div className="container">  
    
<div className="weather_list">
  <h1>Weather Search</h1>

<input type="text" placeholder='Enter city name ' value={city} onChange={handlechange} />

<button onClick={handleclick} >Get weather</button>

{weather && <>

<div className="weather_info">

<h3><span>City :</span>{weather.location.name}</h3>
<p> <span>Country:</span> {weather.location.country}</p>
<p><span>Time:</span> {weather.location.localtime}</p>
<p> <span>Temprature</span> {weather.current.temp_c}°c</p>

</div>

</>
 

}

</div>
</div>

  )
}

export default weather
import React, { Component } from 'react'
import './App.css';
import './css/style.css';

import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
const api ={
  key:"abb15ac3fe3694d485c363e14c02aa0f",
  url:"https://api.openweathermap.org/data/2.5/"
}

export default class App extends Component {

  state = {
    city:'Rahovec',
    country:'Kosove',
    icon:'',
    temp:0,
    temp_min:0,
    temp_max:0,
    description:'',
    status:false,
    error:false,
  
  }

  getData =async (e)=>{
    e.preventDefault();
    const qyteti = e.target.elements.qyteti.value;
    const shteti = e.target.elements.shteti.value;

    const result = await fetch(`${api.url}weather?q=${qyteti},${shteti}&appid=${api.key}`);
    const data = await result.json();
    
    if(result.status == 200){
      this.setState({
        city:qyteti,
        country:shteti,
        temp:this.convertToCelcius(data.main.temp),
        temp_min:this.convertToCelcius(data.main.temp_min),
        temp_max:this.convertToCelcius(data.main.temp_max),
        description:data.weather[0].description,
        icon:data.weather[0].icon,
        status:true,
        error:false       
      })
    }else {
      this.setState({error:true})
    }    
  }
  convertToCelcius = (temp)=>{
    return Math.floor(temp-273.15);
  }
  render() {
    return (      
      <div className='App'>
        <div className='overlay'></div> 
          <Form getData={this.getData} />

          {this.state.error ? <Error /> : ''}
          {this.state.status ? <Weather data={this.state}/>:''}
          
      </div>
    );
  }
}
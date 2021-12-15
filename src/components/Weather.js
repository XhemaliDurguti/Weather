import React from 'react'
// import weatherIcon from '../image/weather.jpg';


export default function Weather(props) {
    const {city,country,temp,temp_min,temp_max,description,icon} = props.data;
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-sm-12 text-center'>
                <div className='cont-data border mb-5'>
                    <h1 className='text-center'>{city},{country}</h1>
                    <h5 className='text-center'>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
                    </h5>
                    <h2 className='display-1'>
                        {temp}&deg;
                    </h2>
                    <h3>
                        <span className='display-3 mx-3'>min: {temp_min}&deg;</span>
                        <span className='display-3 mx-3'>max: {temp_max}&deg;</span>
                    </h3>
                    <h6 className='display-2'>{description}</h6>
                </div>
            </div>
        </div>
    </div>
    )
}


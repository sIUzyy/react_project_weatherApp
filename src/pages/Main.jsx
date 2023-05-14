const info = [
  'A weather API-based platform provides up-to-date weather information. ',
  'To access weather information, please enter the location you would like to search in the provided search bar.',
]

import React,{ useContext } from 'react'
import image from '../assets/main.webp'
import { InfoContext } from '../context/dataContext'


const Main = () => {

  const { data, showDefault } = useContext(InfoContext)
  

  return (
    <div className='h-screen flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}>
      {showDefault ? (
        <div className='text-center'>
          <div>
            <h1 className='font-main text-5xl text-[#00000]'>Welcome to SkyCast!</h1>
          </div>
          <div>
            {info.map((data) => (
              <p className='text-sm font-main'>{data}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className='main-container'>
          <div className='mx-5 text-center pb-10'>
            <div>
              <h1 className='city font-main text-3xl'>{data.name}</h1>
            </div>
            <div>
              {data.main ? (
                <h1 className='temp font-main text-7xl font-bold mt-2'>{(data.main.temp - 273.15).toFixed()} °C</h1>
              ) : null}
              {data.weather ? (
                <h1 className='font-main text-2xl '>{data.weather[0].description}</h1>
              ) : null}
            </div>
          </div>
          {data.name != undefined && (
            <div className='mx-5 text-white'>
              <div className='flex justify-between text-center py-10 rounded-md backdrop-blur bg-white/30 font-main'>
                <div className='mx-5'>
                  {data.main ? (
                    <p>{(data.main.feels_like - 273.15).toFixed()} °C</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div>
                  {data.main ? <p>{data.main.humidity} %</p> : null}
                  <p>Humidity</p>
                </div>
                <div className='mx-5'>
                  {data.wind ? <p>{(data.wind.speed * 1.60934).toFixed()} km/h</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Main

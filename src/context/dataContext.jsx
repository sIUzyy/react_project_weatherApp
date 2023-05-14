import { createContext,useState } from "react";
import axios from 'axios'

export const InfoContext = createContext()

export const DataContextProvider = ({children}) => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [error, setError] = useState(false)
    const [showDefault, setShowDefault] = useState(true);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=591b20dd192e6c2905574b76baabf514`


    const findLocation = async (event) => {

        try{
            if(event.key === 'Enter'){
                const info = await axios.get(url)
                .then((res) =>{
                    setData(res.data)
                    console.log(res.data)

                })
                setLocation('')
                setShowDefault(false)

            }

        }catch(err){
            setError(err.message)
            alert(err.message)
        }
    }

    const value = {
        data,
        setData,
        location,
        setLocation,
        error,
        setError,
        showDefault,
        setShowDefault,
        findLocation,
    }

  return(
    <InfoContext.Provider value={value}>
        {children}
    </InfoContext.Provider>
  )
}




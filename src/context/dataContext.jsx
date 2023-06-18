//import the createContext to implement createContext api function.
import { createContext,useState } from "react";

//import the axios, axios is use for fetching data.
import axios from 'axios'

//created a const called 'InfoContext' and set it to createContext().
export const InfoContext = createContext()

export const DataContextProvider = ({children}) => {

    //created a state called 'data' this will contain all of the data from api that why we set it to object '{ }'
    const [data, setData] = useState({})

    //created a state called location and we passed this state to our api.
    const [location, setLocation] = useState('')

    //created a state called 'error' and set it to false, if error occur, a certain message will show.
    const [error, setError] = useState(false)

    //what this state to is show the default html that we created like 'Welcome to skycast' then if the api show or called that message will be hidden.
    const [showDefault, setShowDefault] = useState(true);

    //created a const called 'url' and set it to api we get from openweather, then pass down the location state that we created.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=591b20dd192e6c2905574b76baabf514`

    //created a function called 'findLocation' this function is implemented to search a location.
    const findLocation = async (event) => {

    //implement a try and catch method.
        try{
            //called the 'event' then if the user hit the 'Enter' it will excute the code that we implemented.
            if(event.key === 'Enter'){
                //we passed down the url api into 'info' that we created.
                const info = await axios.get(url)

                //then we called the setData to get the data from api and display it.
                .then((res) =>{
                    setData(res.data)
                    console.log(res.data)

                })
                //after that using 'setLocation' after searching for a certain location the input 'search bar' will be cleared.
                setLocation('')

                //then the setShowDefault will become false, the default value is true.
                setShowDefault(false)

            }

        //if error occur these message will show using alert.
        }catch(err){
            setError(err.message)
            alert(err.message)
        }
    }

    //create a const called 'value' then inside of 'value' we passed down all of the functions and states that we created.
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
    //called the InfoContext that we created at line 4. Then set it to 'Provider' then passed down the value.
    <InfoContext.Provider value={value}>
        {children}
    </InfoContext.Provider>
  )
}




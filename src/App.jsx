import MainRoutes from './routes/MainRoutes'
import {  DataContextProvider } from './context/dataContext'

function App() {

  return (
     <>
     <DataContextProvider>
      <MainRoutes/>
      </DataContextProvider>
     </>
  )
}

export default App

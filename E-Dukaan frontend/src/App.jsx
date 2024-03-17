import './App.css'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routes/CustomerRoutes'
function App() {

  return (
      <Routes>
        <Route path='https://e-dukaaan.netlify.app/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      
  )
}

export default App

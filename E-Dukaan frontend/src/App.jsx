import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerRoutes from './Routes/CustomerRoutes'
function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      <ToastContainer/>
    </> 
  )
}

export default App

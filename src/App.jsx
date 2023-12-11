import './App.css'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Addhallform from './components/Addhallform'
import Bookhallform from './components/Bookhallform'
import Hodtable from './components/Hodtable'
import Hodtable1 from './components/Hodtable1'
import Bookingstatus from './components/Bookingstatus'
import Allbookings from './components/Allbookings_hod'
import Apprbookings from './components/Apprbookings_hod'
import Bookings_ao from './components/Bookings_ao'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="homepage" element={<Homepage/>}/>
      <Route path="/AODashboard" element={<Addhallform/>}/>
      <Route path="/EmployBookHall" element={<Bookhallform/>}/>
      <Route path='/HodNBookings' element={<Hodtable/>}/>
      <Route path="/AONBookings" element={<Hodtable1/>}/>
      <Route path='/EmployHStatus' element={<Bookingstatus/>}/>
      <Route path="/HodBookings" element={<Allbookings/>}/>
      <Route path="/HodABookings" element={<Apprbookings/>}/>
      <Route path="/AOBookings" element={<Bookings_ao/>}/>
      {/* 
      <Route path="/AONBookings" element={<Addhallform/>}/>
      <Route path="/HODDashboard" element={<HODDashboard/>}></Route>
      <Route path="/EmployBookHall" element={<Bookhallform/>}></Route>
      <Route path="/Commen" element={<Commen/>}></Route>
      <Route path='/EmployHStatus' element={<EmployBookings/>}></Route>
      <Route path="/EmployProfile" element={<Profile/>}></Route>
      <Route path="hod" element={<Hod/>}/> 
      <Route path="employee" element={<Employee/>}/> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App

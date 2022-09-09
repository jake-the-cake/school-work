import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CreateAccount } from './pages/CreateAccount'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export const UserContext: any = createContext(null)

const App = () => {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{users:[], activeUser:undefined}}>
        <div>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
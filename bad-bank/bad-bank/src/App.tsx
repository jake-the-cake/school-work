import React, { createContext, useContext, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CreateAccount } from './pages/CreateAccount'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'success':
      return { activeUser: state.activeUser, users:state.users };
    case 'failure':
      return { activeUser: false, users:state.users };
    default:
      return state;
  }
}

export const UserContext: any = createContext(null)

const App = () => {
  console.log('render')
  const [state, dispatch] = useReducer(reducer, { users: [], activeUser: false });
  const contextValue = { state, dispatch };
  return (
    <BrowserRouter>
      <UserContext.Provider value={contextValue}>
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
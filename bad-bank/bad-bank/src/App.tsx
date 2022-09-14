import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AllData } from './pages/AllData'
import { CreateAccount } from './pages/CreateAccount'
import { Deposit } from './pages/Deposit'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Success } from './pages/Success'
import { Withdraw } from './pages/Withdraw'

export const reducer = (state: any, action: any) => {
  const { users, activeUser } = state
  switch (action.type) {
    case 'success':
      return { activeUser: activeUser, users: users };
    case 'failure':
      return { activeUser: false, users: users };
    default:
      return state;
  }
}

export const UserContext: any = createContext(null)

const App = () => {
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
          <Route path='/alldata' element={<AllData />} />
          <Route path='withdraw'>
            <Route path='' element={<Withdraw />} />
            <Route path='success'  element={<Success type='withdrawal' />}/>
          </Route>
          <Route path='deposit'>
            <Route path='' element={<Deposit />} />
            <Route path='success' element={<Success type='deposit' />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
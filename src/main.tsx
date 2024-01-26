import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter ,Routes , Route   } from 'react-router-dom'
import App from './App.tsx'
import Getmemes from './components/Getmemes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}></Route>
<Route path='/edit' element={<Getmemes  /> } />

</Routes>

    </BrowserRouter>
  </React.StrictMode>,
)

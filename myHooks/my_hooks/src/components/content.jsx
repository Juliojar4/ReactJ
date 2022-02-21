import React from 'react'
import './content.css'
import { Route, Routes } from 'react-router-dom'


import Home from '../views/examples/Home'
import UseState from '../views/examples/UseState'
import UseEffect from '../views/examples/UseEffect'
import UseRef from '../views/examples/UseRef'
import UseCallback from '../views/examples/UseCallback'
import UseMemo from '../views/examples/UseMemo'
import UseContext from '../views/examples/UseContext'
import UseReducer from '../views/examples/UseReducer'
import UseCustom from '../views/examples/UseCustom'
import NotFound from '../views/examples/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/UseEffect" element={<UseEffect />} />
            <Route path="/UseRef" element={<UseRef/>} />
            <Route path="/UseCallback" element={<UseCallback />} />
            <Route path="/UseMemo" element={<UseMemo />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseReducer" element={<UseReducer/>} />
            <Route path="/UseCustom" element={<UseCustom />} />
            <Route path="*" element={<NotFound/>} />
            
        </Routes>
    </main>
)

export default Content
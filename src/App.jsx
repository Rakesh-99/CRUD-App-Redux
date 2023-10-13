import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Read from './components/Read';
import Navbar from './components/Navbar';


const App = () => {

    return (

        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/create' element={<Create />} />
                    <Route exact path='/edit/:id' element={<Edit />} />
                    <Route exact path='/read' element={<Read />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

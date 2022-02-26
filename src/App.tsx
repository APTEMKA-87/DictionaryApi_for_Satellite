import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';


function App() {
    return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="result" element={<ResultPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>
}


export default App;



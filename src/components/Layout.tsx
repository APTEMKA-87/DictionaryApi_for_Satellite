import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/result">Result Page</NavLink>
            </header>
            {/*Outlet хз для чего, может сложу туда что-то*/}
            <Outlet/>
            {/*футер для красоты))*/}
            <footer> 2022</footer>


        </>
    );
};

export default Layout;
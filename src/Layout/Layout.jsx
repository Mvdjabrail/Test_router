import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import css from '../Layout/layout.module.css'

const Layout = () => {
    return (
        <>
        <Header/>
        <div className={css.outlet}>
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
};

export default Layout;
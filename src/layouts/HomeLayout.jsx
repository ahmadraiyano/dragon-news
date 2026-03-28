import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto my-3 grid grid-cols-4'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-2">
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
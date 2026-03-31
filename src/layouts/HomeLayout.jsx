import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 lg:w-10/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 lg:w-10/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 lg:w-10/12 mx-auto my-3 grid grid-cols-1 lg:grid-cols-4">
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-2 lg:mx-4">
          {state === 'loading'? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

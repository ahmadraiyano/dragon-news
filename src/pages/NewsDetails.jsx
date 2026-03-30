
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';

const NewsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    const [news,setNews] = useState({})

    useEffect(()=>{
        const filteredNews = data.find(singleNews=> singleNews.id === id)
        setNews(filteredNews)
    },[data,id])
    
    return (
        <div>
            <header>
                <Header></Header>
                <nav className='w-11/12 lg:w-10/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <section className='col-span-3'>
                    <h2 className='font-bold'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3 gap-4'>
            <p className='bg-secondary px-3 py-2 text-base-100'>Latest</p>
            <Marquee className='flex gap-4' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur aliquid magnam!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur aliquid magnam!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur aliquid magnam!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
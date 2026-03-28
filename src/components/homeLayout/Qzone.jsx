import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-bold mb-4'>Q-Zone</h2>
            <div className='space-y-4 flex flex-col justify-center'>
                <img src={swimmingImg} alt="Swimming" />
                <img src={classImg} alt="Swimming" />
                <img src={playImg} alt="Swimming" />
            </div>
        </div>
    );
};

export default Qzone;
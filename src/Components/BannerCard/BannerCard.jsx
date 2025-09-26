import React from 'react';
import imgBannerBG from '../../assets/vector1.png'

const BannerCard = ({bgGradient, title, count}) => {
    return (
        <div className={"relative text-white rounded-xl w-full flex justify-between "+bgGradient}>
            <img src={imgBannerBG} className='' alt="" />
            <img src={imgBannerBG} className='rotate-180' alt="" />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center font-bold'>
                <p className='text-lg'>{title}</p>
                <h2 className='text-5xl'>{count}</h2>
            </div>
        </div>
    );
};

export default BannerCard;
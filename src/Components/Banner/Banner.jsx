import React from 'react';
import BannerCard from '../BannerCard/BannerCard';

const Banner = () => {
    return (
        <div className="banner flex gap-5 my-16 flex-col sm:flex-row">
            <BannerCard title='In Progress' count='0' bgGradient='bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'></BannerCard>
            <BannerCard title='Resolved' count='0' bgGradient='bg-gradient-to-br from-[#54CF68] to-[#00827A]'></BannerCard>
        </div>
    );
};

export default Banner;
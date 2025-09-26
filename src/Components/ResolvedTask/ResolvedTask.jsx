import React from 'react';
import StatusCard from '../StatusCard/StatusCard';


const ResolvedTask = () => {
    return (
        <div id="resolved-task" className="mt-5">
            <h3 className="text-xl font-bold text-gray-800">Resolved Task</h3>
            <div className="container mt-5">
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
            </div>
        </div>
    );
};

export default ResolvedTask;
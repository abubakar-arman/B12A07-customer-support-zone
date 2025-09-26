import React from 'react';
import StatusCard from '../StatusCard/StatusCard';


const TaskStatus = () => {
    return (
        <div id="task-status" className="">
            <h3 className="text-xl font-bold text-gray-800">Task Status</h3>
            <div className="container mt-5">
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
                <StatusCard title='Payment Failed - Card Declined'></StatusCard>
            </div>
        </div>
    );
};

export default TaskStatus;
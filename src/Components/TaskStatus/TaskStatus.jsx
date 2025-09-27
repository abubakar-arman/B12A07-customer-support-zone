import React from 'react';
import StatusCard from '../StatusCard/StatusCard';


const TaskStatus = ({tasksInProgress, handleTaskComplete}) => {
    return (
        <div id="task-status" className="">
            <h3 className="text-xl font-bold text-gray-800">Task Status</h3>
            <div className="container mt-5">
                {
                    tasksInProgress.map((t, idx) => <StatusCard key={idx} task={t} handleTaskComplete={handleTaskComplete} isResolved={false} />)
                }
            </div>
        </div>
    );
};

export default TaskStatus;
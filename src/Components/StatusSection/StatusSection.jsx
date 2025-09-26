import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const StatusSection = () => {
    return (
        <div id="status-section" className="">
            <TaskStatus />
            <ResolvedTask />
        </div>
    );
};

export default StatusSection;
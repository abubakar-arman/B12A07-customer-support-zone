import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const StatusSection = ({tasksInProgress, tasksResolved, handleTaskComplete}) => {
    return (
        <div id="status-section" className="">
            <TaskStatus tasksInProgress={tasksInProgress} handleTaskComplete={handleTaskComplete} />
            <ResolvedTask tasksResolved={tasksResolved} handleTaskComplete={handleTaskComplete} />
        </div>
    );
};

export default StatusSection;
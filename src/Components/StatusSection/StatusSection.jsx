import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const StatusSection = ({tasksInProgress, handleTaskComplete}) => {
    return (
        <div id="status-section" className="">
            <TaskStatus tasksInProgress={tasksInProgress} handleTaskComplete={handleTaskComplete} />
            {/* <ResolvedTask /> */}
        </div>
    );
};

export default StatusSection;
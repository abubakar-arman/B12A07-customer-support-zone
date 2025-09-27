import React from 'react';
import StatusCard from '../StatusCard/StatusCard';


const ResolvedTask = ({tasksResolved, handleTaskComplete}) => {
    // console.log('rr', tasksResolved)
    return (
        <div id="resolved-task" className="mt-5">
            <h3 className="text-xl font-bold text-gray-800">Resolved Task</h3>
            <div className="container mt-5">
                {
                    tasksResolved.map(t => <StatusCard key={t.id} task={t} handleTaskComplete={handleTaskComplete} isResolved={true}/>)
                }
            </div>
        </div>
    );
};

export default ResolvedTask;
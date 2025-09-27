import React from 'react';

const StatusCard = ({task, handleTaskComplete, isResolved}) => {
    const {title} = task
    return (
        <div className="card bg-base-100 shadow-sm mt-3 rounded-sm">
            <div className="card-body">
                <div className="card-title">{title}</div>
                <button onClick={()=>handleTaskComplete(task)} className={"btn text-white" + (isResolved ? ' bg-purple-500 hover:bg-purple-700' : ' bg-green-500 hover:bg-green-700')}>{isResolved ? 'Resolved' : 'Complete'}</button>
            </div>
        </div>
    );
};

export default StatusCard;
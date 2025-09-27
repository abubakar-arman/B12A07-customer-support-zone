import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


// console.log(data)
// {
//   "id": 1,
//   "title": "Login issue",
//   "description": "Customer cannot log in with correct credentials.",
//   "customer": "Alice Johnson",
//   "priority": "High",
//   "status": "Open",
//   "createdAt": "2025-09-01T09:15:00Z"
// },
const TicketCard = ({ ticket, handleTicketClick }) => {
    const {
        id,
        title,
        description,
        customer,
        priority,
        status,
        createdAt
    } = ticket

    let statusCircleBg = ''
    let statusBg = ''
    switch(status) {
        case 'Open':
            statusCircleBg = ' bg-green-700';
            statusBg = ' bg-green-300 text-green-800'
            break;
        case 'In Progress':
            statusCircleBg = ' bg-yellow-700';
            statusBg = ' bg-yellow-300 text-yellow-800'
            break;
        case 'Resolved':
            statusCircleBg = ' bg-blue-700';
            statusBg = ' bg-blue-300 text-blue-800'
            break;
    }
   
    return (
        <div className="ticket-card card bg-base-100 w-full shadow-sm" onClick={() => handleTicketClick(ticket)}>
            <div className="card-body">
                <div className="top flex justify-between">
                    <h4 className="card-title">{title}</h4>
                    <button className={"btn rounded-full h-7"+ statusBg}><span className={'w-3 h-3 rounded-full'+statusCircleBg}></span>{status}</button>
                </div>
                <p className="middle text-gray-600">{description}</p>
                <div className="bottom mt-5 font-semibold flex justify-between text-zinc-600">
                    <div className='flex gap-5'>
                        <p className="">#{id}</p>
                        <p className="text-red-700">{priority}</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className="">{customer}</p>
                        <p className=""><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {createdAt.split('T')[0]}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TicketCard;
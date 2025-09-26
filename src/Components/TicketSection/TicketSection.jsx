import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketSection = ({data}) => {
    return (
        <div id="ticket-section" className="">
            <h3 className="text-xl font-bold text-gray-800">Customer Tickets</h3>
            <div id="ticket-container" className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                {
                    data.map(ticket => (
                        <TicketCard ticket={ticket}></TicketCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TicketSection;
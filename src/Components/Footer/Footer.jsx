import React from 'react';
import iconX from '../../assets/icon_x.png'
import iconLinkedin from '../../assets/icon_linkedin.png'
import iconFacebook from '../../assets/icon_facebook.png'
import iconMail from '../../assets/icon_mail.png'

const Footer = () => {
    return (
        <div id="footer" className="bg-black text-white mt-10">
            <div id="links" className="grid grid-cols-6 p-10 border-b border-b-gray-700">
                <div id="about" className='col-span-2 mr-20'>
                    <h3 className="text-lg mb-3">CS — Ticket System</h3>
                    <p className="text-sm text-zinc-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div id="company" className='flex flex-col gap-3 text-zinc-400'>
                    <h4 className="text-lg text-white">Company</h4>
                    <a href="">About Us</a><a href="">Our Mission</a><a href="">Contact Saled</a></div>
                <div id="company" className='text-zinc-400 flex flex-col gap-3'>
                    <h4 className="text-lg text-white">Services</h4>
                    <a href="">Products & Services</a><a href="">Customer Stories</a><a href="">Download Apps</a></div>
                <div id="company" className='text-zinc-400 flex flex-col gap-3'>
                    <h4 className="text-lg text-white">Information</h4>
                    <a href="">Privacy Policy</a><a href="">Terms & Condition</a><a href="">Join Us</a></div>
                <div id="company" className='text-zinc-400 flex flex-col gap-3'>
                    <h4 className="text-lg text-white">Social Links</h4>
                    <a href=""><img src={iconX} className='inline pr-1' alt="" /> @CS - Ticket System</a>
                    <a href=""><img src={iconLinkedin} className='inline pr-1' alt="" /> @CS - Ticket System</a>
                    <a href=""><img src={iconFacebook} className='inline pr-1' alt="" /> @CS - Ticket System</a>
                    <a href=""><img src={iconMail} className='inline pr-1' alt="" /> support@cst.com </a>
                </div>
            </div>
            <div id="copyright" className="text-center p-5">
                <p className="">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
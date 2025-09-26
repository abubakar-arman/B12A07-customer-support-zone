const Navbar = () => {
    const menuItems = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact']

    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menuItems.map(name => <li><a>{name}</a></li>)}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CS - Ticket System</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map(name => <li><a>{name}</a></li>)}
                </ul>
            </div>
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</button>
        </div>
    );
};

export default Navbar;
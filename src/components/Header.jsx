const Header = () => {
    return (
        <>
            <div className="top-header flex items-center justify-between h-[75px] bg-slate-500">
            <div className="header-left">
                <div className="header-address">
                    <p>123, Dhaka Bangladesh</p>
                </div>
            </div>
            <div className="header-right">
                <div className="main-menu">
                    <ul className="flex">
                        <li className="pl-10"><a href="">Home</a></li>
                        <li className="pl-10"><a href="">About</a></li>
                        <li className="pl-10"><a href="">Projects</a></li>
                        <li className="pl-10"><a href="">Gallery</a></li>
                        <li className="pl-10"><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
};

export default Header;
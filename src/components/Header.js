import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { useEffect } from "react";
import { useRef } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(undefined);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="header__wrapper">
            <header className="header">
                <p className='menu__button' onClick={ toggleMenu } style={{cursor: 'pointer'}}><IoIosMenu className="menu__icon" size={35} color="white"/></p>
                <p className="branding1">ИСКУССТВО ЖИТЬ</p>
                <p className="branding2">angel.<br/>&nbsp;&nbsp;даст</p>
                {isMenuOpen && (
                    <div className="dropdown__wrapper" ref={menuRef}>
                        <nav className="dropdown__menu">
                            <a href="https://www.instagram.com/angeldust.by?igsh=MTl5dTEydDE5ZHVxbw%3D%3D&utm_source=qr" target="blank"> - INSTAGRAM</a>
                            <a href="https://t.me/drainmp3" target="blank"> - TELEGRAM</a>
                            <p>СЛЕДИ ЗА ОБНОВЛЕНИЯМИ</p>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
}
 
export default Header;
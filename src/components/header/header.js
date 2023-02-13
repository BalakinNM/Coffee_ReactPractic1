import './header.scss'

import Icon from '../../assets/icons/logo-white.svg'

const Header = () => {
    return (
        <>
            <header className="header">
                <img src={Icon} alt="coffee_logo" className="header__logo"/>
                <a href="google.com" className="header__tab">Coffee house</a>
                <a href="google.com" className="header__tab">Our coffee</a>
                <a href="google.com" className="header__tab">For your pleasure</a>
            </header>
        </>
    )
}
export default Header;
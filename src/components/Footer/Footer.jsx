import './Footer.scss';

const Footer = () => {
    return(
        <footer id='footer'>
            <header>
                <h2> &copy; 2023 FocusFrame Photography</h2>
            </header>
            <nav>
                <span>
                        <i className="far fa-envelope"> Email</i>
                </span>
                <span className='hidden'>|</span>
                <span>
                        <i className="fab fa-instagram"> Instagram</i>
                </span>
            </nav>
        </footer>
    );
};

export default Footer;
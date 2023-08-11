import './About.scss';
import dinv from '../../assets/profile/profile.png';

const About = () => {

    return(
        <article id='about'>
            <header>
                <h1>About Us</h1>
            </header>
            <div className='about-flex-container'>
                <div className='about-summary'>
                    <div>
                        <p>
                        At FocusFrame Photography, we're dedicated to seizing moments and emotions, crafting visual stories that last a lifetime. With a blend of creativity and technical excellence, our experienced team captures the essence of weddings, gatherings, and corporate events. We go beyond pictures, creating art that lets you relive the feelings. From candid shots to meticulously staged scenes, we frame life's precious instances with skill and passion. Your story, beautifully framed.
                        </p>
                    </div>
                </div>
                <div className='about-profile'>
                    <a href={dinv} data-lightbox='models' data-title='Focus Frame'>
                        <img src={dinv} className='profile-pic' loading='lazy'/>                        
                    </a>
                </div>
            </div>
        </article>
    );
};

export default About;
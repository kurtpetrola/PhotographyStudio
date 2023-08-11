import './City.scss';
import Topscroll from '../../Topscroll/Topscroll';
import city1 from '../../../assets/city/city1.avif';
import city2 from '../../../assets/city/city2.avif';
import city3 from '../../../assets/city/city3.avif';
import city5 from '../../../assets/city/city5.avif';
import city7 from '../../../assets/city/city7.avif';
import city8 from '../../../assets/city/city8.avif';

const City = () => {
    return(
        <section id='city'>
            <header>
                <h1>City</h1>
                <h3>A collection of City photographs.</h3>
            </header>
            <div className='city-flex-container'>
                <figure className='city-flex-box-three'>
                    <a href={city1} data-lightbox='city-pic' data-title='City1'>
                        <img src={city1} className='city-box' loading='lazy'/>                        
                    </a>
                </figure>
                <div className='city-flex-box-four'>
                    <figure className='city-flex-box-four-top'>
                        <a href={city8} data-lightbox='city-pic' data-title='City2'>
                            <img src={city8} className='city-box' loading='lazy'/>                        
                        </a>
                    </figure>
                    <figure className='city-flex-box-four-bottom'>
                        <a href={city7} data-lightbox='city-pic' data-title='City3'>
                            <img src={city7} className='city-box' loading='lazy'/>                        
                        </a>
                    </figure>
                </div>
                <div className='city-flex-box-two'>
                    <figure className='city-flex-box-two-top'>
                        <a href={city3} data-lightbox='city-pic' data-title='City4'>
                            <img src={city3} className='city-box' loading='lazy'/>                        
                        </a>
                    </figure>
                    <figure className='city-flex-box-two-bottom'>
                        <a href={city5} data-lightbox='city-pic' data-title='City5'>
                            <img src={city5} className='city-box' loading='lazy'/>                        
                        </a>
                    </figure>
                </div>
                <figure className='city-flex-box-one'>
                    <a href={city2} data-lightbox='city-pic' data-title='City6'>
                        <img src={city2} className='city-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br/>
            <Topscroll />
        </section>
    );
};

export default City;
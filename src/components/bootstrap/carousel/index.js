import Carousel from 'react-bootstrap/Carousel';
import style from './carousel.module.scss'


//img
import foto1 from '../../../img/gui1.jpg'
import foto2 from '../../../img/vini1.jpg'
import foto3 from '../../../img/gui3.jpg'


function Carousel1() {
  return (
    <Carousel className={style.container}>
      <Carousel.Item className={style.box_img}>
        <img src={foto3} alt='foto slide'/>
        <img src={foto2} alt='foto slide' className={style.img_carousel_responsive}/>

      </Carousel.Item>


      <Carousel.Item className={style.box_img}>
        <img src={foto2} alt='foto slide'/>
        <img src={foto2} alt='foto slide' className={style.img_carousel_responsive}/>


        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.box_img}>
        <img src={foto3} alt='foto slide'/>
        <img src={foto2} alt='foto slide' className={style.img_carousel_responsive}/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
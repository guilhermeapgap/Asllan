import Carousel from 'react-bootstrap/Carousel';
import style from './carousel.module.scss'


//img
import model_1 from '../../../img/model-1.jpg'
import modelo2 from '../../../img/modelo2.png'
import foto2 from '../../../img/vini1.jpg'
import foto3 from '../../../img/gui3.jpg'
import fora1 from '../../../img/fora1.jpg'
import fora2 from '../../../img/foto.png'

//components
import BTNSeemore from '../../Botoes';



function Carousel1() {
  return (
    <Carousel className={style.container}>
      <Carousel.Item className={style.box_img}>
        <img src={foto3} alt='foto slide'/>
        <img src={foto2} alt='foto slide' className={style.img_carousel_responsive}/>
        <Carousel.Caption>
          <BTNSeemore/>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className={style.box_img}>
        <img src={fora1} alt='foto slide'/>
        <img src={fora2} alt='foto slide' className={style.img_carousel_responsive}/>

        <Carousel.Caption>
          <BTNSeemore/>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item className={style.box_img}>
        <img src={model_1} alt='foto slide'/>
        <img src={modelo2} alt='foto slide' className={style.img_carousel_responsive}/>

        <Carousel.Caption>
          <BTNSeemore/>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
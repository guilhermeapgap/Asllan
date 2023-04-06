
import styles from './main.module.scss'

//comnponets
import Carousel1 from '../bootstrap/carousel';
import Modalhistory from '../bootstrap/modal/historia'
import CarouselScroll from '../carouselScroll';
import FingerAnimation from '../fingerAnimation'


//img
import delivery from '../../img/Delivery-PNG-truck.png'
import goodPrice from'../../img/goodPrice.png'
import store from '../../img/storelogo.png'

function Main(){
    return(
        <div className={styles.container}>       
            <div className={styles.banner}></div>
            
            <CarouselScroll/>
            <div className={styles.finger_center}>
                <FingerAnimation/>
            </div>
            
            <div className={styles.box2}>
                <h1 id='sobre'>Conheça nossa história</h1>    
                <div>                
                    <p>lorem Ipsun </p>
                    <p> <Modalhistory/> </p>
                    <p>lorem Ipsun </p>
                </div>
            </div>
            
            <div>
                <Carousel1/>
            </div>

        </div>
    )
}

export default Main;

import styles from './main.module.scss'

//comnponets
import Carousel1 from '../bootstrap/carousel';
import Modalhistory from '../bootstrap/modal/historia'



//img
import delivery from '../../img/Delivery-PNG-truck.png'
import goodPrice from'../../img/goodPrice.png'
import store from '../../img/storelogo.png'

function Main(){
    return(
        <div className={styles.container}>       
            <div className={styles.banner}></div>
            <ul>
                <li>
                    <img src={delivery} alt='delivery' title='delivery'></img>
                    <div>
                        <h2>Free shipping</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>             
                    </div>
                </li>
                <li>
                    <img src={goodPrice} alt='goodPrice' title='goodPrice'></img>
                    <div>
                        <h2>Good price</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>             
                    </div>
                </li>
                <li>
                    <img src={store} alt='store' title='store'></img>
                    <div>
                        <h2>Store</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>             
                    </div>
                </li>
            </ul>

            <div className={styles.box2}>
                <h1>Conheça nossa história</h1>    
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
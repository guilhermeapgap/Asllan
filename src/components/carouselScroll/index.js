import style from './carousel.module.scss'

//img
import delivery from '../../img/Delivery-PNG-truck.png'
import goodPrice from'../../img/goodPrice.png'
import store from '../../img/storelogo.png'

function CarouselScroll(){
    return(
        <div className={style.container}>

            <div className={style.items}>
                <div className={style.item}>
                    <img src={delivery} alt='delivery' title='delivery'></img>

                    <div>
                        <h2>Free shipping</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>
                    </div>            
                </div>

                <div className={style.item}>
                    <img src={goodPrice} alt='goodPrice' title='goodPrice'></img>

                    <div>
                        <h2>Good price</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>  
                    </div>           

                </div>

                <div className={style.item}>
                    <img src={store} alt='store' title='store'></img>

                    <div>
                        <h2>Store</h2>
                        <p>lorem daf  dsafkj sdadjç dfkjdçsf </p>   
                    </div>             
                </div>
            </div>



        </div>
    )
}

export default CarouselScroll
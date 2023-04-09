import style from './carousel.module.scss'

//img
import delivery from '../../img/delivery.png'
import goodPrice from'../../img/goodPrice.png'
import store from '../../img/storelogo.png'


function CarouselScroll(){
    return(
        
        <div className={style.container}>

            <div className={style.items}>
                <div className={style.item}>
                    <img src={delivery} alt='delivery' title='delivery'></img>
                    <div>
                        <h2>Entrega Grátis</h2>
                        <p>Entregamos em Brasília e entorno </p>
                    </div>            

                </div>

                <div className={style.item}>
                    <img src={goodPrice} alt='goodPrice' title='goodPrice'></img>

                    <div>
                        <h2>Ótimos preços</h2>
                        <p>Melhor preço do mercado</p>  
                    </div>           

                </div>

                <div className={style.item}>
                    <img src={store} alt='store' title='store'></img>

                    <div>
                        <h2>Loja física</h2>
                        <p>Estamos sempre prontos para <br/>recebê-lo em nossa loja física </p>   
                    </div>             
                </div>
            </div>   
        </div>
        
    )
}

export default CarouselScroll
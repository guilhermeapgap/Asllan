
import style from  './maps.module.scss'


function Maps(){
    return(
        

        <div className={style.container}>
            <h1>Venha conhecer nossa loja!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.382579852328!2d-47.950057!3d-15.836477200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2fbaf5bb4add%3A0xa8032d83e27363d9!2sLoja%20de%20Ternos%20em%20Bras%C3%ADlia%20-%20Asllan%20Republic!5e0!3m2!1spt-BR!2sbr!4v1680908832023!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={style.maps}></iframe>
        </div>

        
    )
}

export default Maps
import finger from '../../img/finger.png'
import style from './finger.module.scss'


function FingerAnimation(){
    return(
        <div>
            <img src={finger} alt='finger' title='finger' className={style.finger}></img>
        </div>
    )
}

export default FingerAnimation

import styles from './footer.module.scss';

//img
import logo from '../../img/logo-asllan-branco.png'
import whatsApp from '../../img/whatsapp.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'


function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.box01}>
          <div>
            <img src={logo} alt='Logo Asllan' title='Logo' className={styles.logo_asllan}></img>
            <a>Sobre</a>
            <a>Nossos Principios</a>
          </div>
          <div>
            <h1>Atendimento</h1>
            <a>Dúvidas Frequentes</a>
            <a>(61)9999-9999</a>
            <a>email@mail.com</a>
          </div>
          <div>
            <h1>Horário de atendimento</h1>
            <p>Sábado - 08:00 às 19:00</p>
            <p>Domingo - Fechado</p>
            <p>Segunda-feira - 08:00 às 19:00</p>
            <p>Terça-feira - 08:00 às 19:00</p>
            <p>Quarta-feira - 08:00 às 19:00</p>
            <p>Quinta-feira - 08:00 às 19:00</p>
            <p>Sexta-feita - 08:00 às 19:00</p>
          </div>
        </div>
        <div className={styles.box_media}>
          <p>Fique em sintonia com a gente</p>
          <div>
            <img src={whatsApp} alt='whatsApp'></img>
            <img src={instagram} alt='instagram'></img>
            <img src={facebook} alt='facebook'></img>
          </div>
        </div>
        <p className={styles.copy}> 2023 Viigas &copy; - Todos os direitos reservados</p>
    </div>
  );
}

export default Footer;
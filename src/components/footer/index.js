
import styles from './footer.module.scss';

//img
import logo from '../../img/logo-asllan-branco.png'
import whatsApp from '../../img/whatsapp.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'


//links
const gerarLink = () => {
  const numeroTelefone = '556199028162'; // Substitua com o número de telefone do destinatário
  const mensagem = 'Olá! vim pelo site'; // Substitua com a mensagem personalizada que você deseja enviar
  const link = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
};
const instagramlink = () => {
  window.open('https://www.instagram.com/asllanrepublic/', '_blank'); // Substitua com a URL do site externo que você deseja abrir em uma nova aba
};
const facebooklink = () => {
  window.open('https://www.facebook.com/asllanrepublic', '_blank'); // Substitua com a URL do site externo que você deseja abrir em uma nova aba
};

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.box01}>
          <div>
            <img src={logo} alt='Logo Asllan' title='Logo' className={styles.logo_asllan}></img>
            
          </div>
          {/* <div>
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
          </div> */}
        </div>
        <div className={styles.box_media}>
          <p>Fique em sintonia com a gente</p>
          <div>
          <button onClick={gerarLink}> <img src={whatsApp} alt='whatsApp'></img></button>

          <button onClick={instagramlink} ><img src={instagram} alt='instagram'></img></button>

          <button onClick={facebooklink}><img src={facebook} alt='facebook'></img></button>
          </div>
        </div>
        <p className={styles.copy}> 2023 Asllan &copy; - Todos os direitos reservados</p>
    </div>
  );
}

export default Footer;
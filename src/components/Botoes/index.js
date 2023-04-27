import style from './botao.module.scss'


const gerarLink = () => {
    const numeroTelefone = '556199028162'; // Substitua com o número de telefone do destinatário
    const mensagem = 'Olá! Vim pelo site'; // Substitua com a mensagem personalizada que você deseja enviar
    const link = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  };
function BTNSeemore(){


    return(
        <div>
            <button onClick={gerarLink} className={style['button-30']}> Ver mais </button>
        </div>
    )
}

export default BTNSeemore
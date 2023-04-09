import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, NavLink } from 'react-router-dom';

import style from './modal.module.scss'


//img
import whatsApp from '../../../img/whatsapp.png'
import instagram from '../../../img/instagram.png'
import facebook from '../../../img/facebook.png'


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

function ModalContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className={style.button_modal}>
        Contatos
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contatos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.box_media}>
            <p>Fique em sintonia com a gente</p>
            <div>

              <button onClick={gerarLink}> <img src={whatsApp} alt='whatsApp'></img></button>

              <button onClick={instagramlink} ><img src={instagram} alt='instagram'></img></button>
              
              <button onClick={facebooklink}><img src={facebook} alt='facebook'></img></button>
              
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContact 
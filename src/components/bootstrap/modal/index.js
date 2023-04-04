import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import style from './modal.module.scss'


//img
import whatsApp from '../../../img/whatsapp.png'
import instagram from '../../../img/instagram.png'
import facebook from '../../../img/facebook.png'
import { NavLink } from 'react-bootstrap';

function ModalContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={style.button_modal}>
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
              <img src={whatsApp} alt='whatsApp'></img>
              <img src={instagram} alt='instagram'></img>
              <img src={facebook} alt='facebook'></img>
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
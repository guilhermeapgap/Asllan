import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import style from './modal.module.scss'

//video
import { Player, ControlBar } from 'video-react';

//img
import post from '../../../../img/sapatos-banner.webp'


function Modalhistory() {
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
          <Player
            playsInline
            poster={post}
            controlbar
            className={style.player}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            
          />    

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalhistory
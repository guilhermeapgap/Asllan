import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import style from './modal.module.scss'

//video
import video from '../../../../video-historia.mp4'

//img
import post from '../../../../img/tumb.jpg'


function Modalhistory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={style.button_modal}>
        Video
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Conheça nossa história</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video src={video} controls poster={post}></video>  
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

export default Modalhistory
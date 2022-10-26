import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./Modal.scss";

function ModalPokemon({pokemonDetalle}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detalle
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Detalle</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
          <div className='row'>
            <div className='col-sm'>
              <div className='row justify-content-center'>
                <img className="imagen-modal" src={pokemonDetalle.imagen} alt="PokeImagen" />
              </div>
            </div>
            <div className='col-sm'>
              <h1>{pokemonDetalle.nombre}</h1>
              <p>{pokemonDetalle.descripcion}</p>
              <p>
                Tipo:  {pokemonDetalle.tipo}<br/>
                Evolución: {pokemonDetalle.evolucion}<br/>
                Altura:  {pokemonDetalle.altura}<br/>
                Peso:  {pokemonDetalle.peso}<br/>
              </p>
              
              
            </div>
          </div>          
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default ModalPokemon;
import React, { useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor:'white',
        border: '2px, solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}))

export const ModalCreate = () => {
    const styles=useStyles();

    const [modal, setModal] = useState(false);

    const abrirCerrarModal = () => {
        setModal(!modal);
    }

    const body=(
        <div className={styles.modal}>
            <h1>PRUEBA</h1>
        </div>
    )
    return (
        <div>
            <button className={styles.button} onClick={()=>abrirCerrarModal()}>Abrir Modal</button>
            <Modal open = {modal} onClose = {abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    )
} 
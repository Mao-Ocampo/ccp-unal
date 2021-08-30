import { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ModalButtons } from '../../../molecules/modals/modalbuttons';

const useStyles = makeStyles({
    modalContainer: {
        position: 'absolute',
        width: '400px',
        padding: '16px',
        backgroundColor: '#FFFFFF',
    },
});

export const ModalActive = () => {
    
    const classnamesCSS = useStyles();

    const [modal, setModal] = useState(false);

    const openClose = () => {
        setModal(!modal);
    }

    const modalBody = (
        <div className={classnamesCSS.modalContainer}>
            <div>
                <ModalButtons buttonPrimaryLabel = 'ACTIVAR' buttonSecondaryLabel = 'CANCELAR'/>
            </div>
        </div>
    )

    return (
        <section>
            <Button onClick={()=>openClose()}>Modal Activar</Button>
            <div className={classnamesCSS.buttonContainer}>
                <Modal open={modal} onclose={openClose}>
                    {modalBody}
                </Modal>
            </div>
        </section>
    )   
};
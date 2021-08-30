import { useState } from 'react'
import { PrimaryButton } from '../../../atoms/modals/primarybutton';
import { SecondaryButton } from '../../../atoms/modals/secondarybutton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px',
    },
});

export const ModalButtons = ({ buttonPrimaryLabel, buttonSecondaryLabel, openClose }) => {
    
    const classnamesCSS = useStyles()

    return (
        <div className={classnamesCSS.buttonContainer}>
            <SecondaryButton onClick={openClose} label={buttonSecondaryLabel}/>
            <PrimaryButton label={buttonPrimaryLabel}/>  
        </div>
    )   
};
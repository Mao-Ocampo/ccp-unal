import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    buttonStyle: {
        padding: '7px 15px 7px 15px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        border: '2px solid #94B43B',
        backgroundColor: '#94B43B',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#94B43B',
        }, 
    },
    
    check: {
        margin: '0 7px 0 0',
    }

});

export const PrimaryButton = (props) => {

    const classnamesCSS = useStyles()

    return(
        <Button className = {classnamesCSS.buttonStyle}>
            <DoneIcon className = {classnamesCSS.check}/>
            {props.label}
        </Button>
    )
}

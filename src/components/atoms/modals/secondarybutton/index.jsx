import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    buttonStyle: {
        padding: '7px 15px 7px 15px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        border: '2px solid #777777',
        backgroundColor: '#FFFFFF',
        color: '#777777',
        '&:hover': {
            backgroundColor: '#777777',
            color: '#FFFFFF',
        }, 
    },
    
    check: {
        margin: '0 7px 0 0',
    }

});

export const SecondaryButton = (props) => {

    const classnamesCSS = useStyles()

    return(
        <Button className = {classnamesCSS.buttonStyle}>
            <ClearIcon className = {classnamesCSS.check}/>
            {props.label}
        </Button>
    )
}

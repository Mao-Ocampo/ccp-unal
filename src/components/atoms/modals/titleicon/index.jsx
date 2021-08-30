import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        height: '28px',
        margin: '5px 0 0 10px',
    },
});

export const TitleIcon = (props) => {
    
    const classnamesCSS = useStyles()

    return (
        <span>
            <img className = {classnamesCSS.icon} src={props.titleIcon} alt="Title Icon" />
        </span>
    )   
};
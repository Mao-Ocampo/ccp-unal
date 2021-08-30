import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '26px',
    },
});

export const Titles = (props) => {
    
    const classnamesCSS = useStyles()

    return (
        <div className = {classnamesCSS.titleContainer}>
            <h1 className = {classnamesCSS.titleText}>{props.title}</h1>
        </div>
    )   
};

/*<span>
                <img src={props.iconTitle} alt="Icon Title" />
            </span>*/
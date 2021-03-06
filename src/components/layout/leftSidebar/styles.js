import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(Theme => ({
    root: {
        backgroundColor: 'white',
        width: '25%',
        padding: '1.5rem 2rem',

    },

    tweeterParent: {
        padding: '10px 0',

    },
    ButtonBase: { width: '100%' },
    profTextavatar: {
        marginRight: '0.5rem',
    },
    profText: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr',


    },
    profName: {
        flex: '1',
    },
    profId: {
        flex: '1',
        color: Theme.palette.text.hint,
        fontSize: '0.75 rem',

    },
    tweeterNameParent: {
        marginRight: '0.5rem',
        width: 'max-content'
    },

    tweeterRoot: {
        backgroundColor: "#f5f8fa",
        marginTop: '3rem',
        borderRadius: "2.5rem",
        padding: "11px 16px"
    },
    tweeterTitle: {
        fontSize: '1.1rem !important',
        fontWeight: '600 !important',
        marginBottom: '11px'
    }

}));
export default useStyles;
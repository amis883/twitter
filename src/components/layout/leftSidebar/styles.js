
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: 'white',
        width: '25%',
        padding: '1.5rem 1rem',

    },
    tweeterParent: {
        padding: '10 0'
    },
    profText: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr'
    },
    tweeterNameParent: {
        marginRight: '0.5rem',
        width: 'max-content'
    },
    profName: {
        flex: '1'
    },
    profId: {
        flex: '1',
        color: theme.palette.text.hint,
        fontSize: '0.9rem'
    },
    tweeterRoot: {
        backgroundColor: "#f5f8fa",
        marginTop: '3rem',
        borderRadius: "2.5rem",
        padding: "11px 24px"
    },
    tweeterTitle: {
        fontSize: '1.1rem !important',
        fontWeight: '600 !important',
        marginBottom: '11px'
    }



}))

export default useStyles;
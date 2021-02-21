
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: 'white',
        width: '18%',
        padding: '1.5rem 1rem'
    },
    logoType: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginRight: '1rem',
        color: theme.palette.primary.main
    },
    logoPic: {
        width: '3rem',
        height: '3rem',
        marginLeft: '0.3rem'
    },
    hashTagTitle: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginTop: '3rem',
        marginBottom: "1.5rem"

    },
    hashtag: {
        marginRight: "0.8rem",
        fontSize: '0.85rem'

    },
    hashTagParent: {
        marginBottom: '0.5rem !important',
        padding: "1.5rem !important",
        width: "100%"
    },
    hashtagPic: {
        width: '1rem',
        height: '1rem'
    }

}))

export default useStyles;
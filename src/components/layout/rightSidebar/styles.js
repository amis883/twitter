
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({

    root: {
        backgroundColor: 'white',
        width: '18%',
        padding: '1.5rem 1rem',


    },
    logoType: {
        fontSize: '1.25rem !important',
        fontWeight: '600 !important',
        marginLeft: '1rem !important',
        color: theme.palette.primary.main
    },
    logoPic: {
        width: '3.5rem !important',
        height: '3.5rem !important',
        marginRight: '0.3rem !important'
    },
    hashTagTitle: {
        fontSize: '1.25rem !important',
        fontWeight: '600 !important',
        marginTop: '3rem !important',
        marginBottom: "1.5rem !important"

    },
    hashtag: {
        marginRight: "0.8rem",
        fontSize: '0.85rem'

    },
    hashTagparent: {
        marginBottom: '0.5rem !important',
        padding: "1rem !important",
        width: "100%"
    },
    hashtagPic: {
        width: '1rem',
        height: '1rem'
    }

}))

export default useStyle;
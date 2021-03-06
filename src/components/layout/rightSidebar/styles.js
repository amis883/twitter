import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(Theme => ({
    divider: {
        height: '100%',
        width: '1',
        backgroundColor: '#7EBAFF !important',
        filter: 'opacity(0.5)'
    },
    root: {
        backgroundColor: 'white ',
        width: '18%'
    },
    logoType: {
        fontSize: '1.5rem !important',
        fontWeight: '500 !important',
        // marginLeft: '1rem !important',
        color: Theme.palette.primary.main,
        padding: '1rem '
    },
    logoPic: {
        width: '2rem !important',
        height: '2rem !important',
        marginRight: '1.3rem !important',
        marginLeft: '0.5rem !important'
    },
    hashTagTitle: {
        fontSize: '1.1rem !important',
        fontWeight: '600 !important',
        padding: '1rem '
    },
    hashtag: {
        fontSize: '1rem'
    },
    hashTagParent: {
        marginBottom: '0.5rem !important',
        padding: '1rem !important',
        width: '100%'
    },
    hashtagPic: {
        width: '1.75rem',
        height: '1.75rem',
        marginLeft: '0.5rem !important'
    }
}))
export default useStyles

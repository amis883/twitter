import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flex: '1 ',
        backgroundColor: '#e6e6e6',
        overflowY: 'auto'
    },
    header: {
        padding: '18',
        backgroundColor: 'white',
        display: 'flex'
    },
    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        marginRight: '0.5rem'
    },
    divider: {
        backgroundColor: '#7ebaff',
        filter: 'opacity(0.18)'
    },
    newTweet: {
        padding: '18',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    tweetItem: {
        padding: '18',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem'
    },
    input: {
        flex: '1',
        marginRight: '1rem',
        border: 'none',
        '&:focus': {
            outline: 'unset'
        },
        newTweetBtn: {
            color: 'white !important',
            borderRadious: '1rem !important',
            minHeight: '30px !important',
            height: '30px !important',
            fontFamily: 'shabnam',
            lineHeight: '1rem !important',
            minWidth: '5rem !important'
        },
        tweetItemName: {
            fontWeight: '600',
        },
        tweetItemId: {
            fontSize: '.9rem',
            color: theme.palette.text.hint,
            marginRight: '.5rem',
            paddingTop: '.1rem'


        },

        newTweetImgBtn: {
            border: '1px solid #333',
            padding: '.2rem !important',
            borderRadious: '50%',
            marginLeft: '1rem'
        },
        tweetText: {
            fontSize: '.9rem',
            paddingTop: '.75rem'

        },
        likeCount: {
            color: theme.palette.text.hint,
            fontSize: '.9rem',
            marginLeft: '.5rem'
        }
    }
}))

export default useStyles

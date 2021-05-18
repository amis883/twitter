import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#e6e6e6',
        
    },
    header: {
        padding: '18px',
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
        padding: '20px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    tweetItem: {
        padding: '18px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem'
    },
    input: {
        flex: '1',
        marginRight: '16px',
        border: 'none',
        '&:focus': {
            outline: 'unset'
        }},
        newTweetBtn: {
            color: 'white',
            borderRadious: '20px !important',
            minHeight: '30px',
            height: '30px',
            fontFamily: 'shabnam !important',
            lineHeight: '1rem',
            minWidth: '5rem !important'
        },
        tweetItemName: {
            fontWeight: '600',
            fontSize:'20px'
        },
        tweetItemId: {
            fontSize: '.9rem',
            color: theme.palette.text.hint,
            marginRight: '.5rem',
            paddingTop: '.1rem'
        },

        
        tweetText: {
            fontSize: '.9rem',
            paddingTop: '.75rem'
        }
    
    ,
    likeCount: {
        color: theme.palette.text.hint,
        fontSize: '.9rem',
        marginLeft: '8px' 
    },
  
    newTweetImg: {
    },
    newTweetImgBtn: {
        border: '0.5px solid #3337',
        padding: '0.2rem !important',
        marginLeft: '16px'
    }
}))

export default useStyles

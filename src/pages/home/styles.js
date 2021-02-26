
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: { flex: '1 ', backgroundColor: "#e6e6e6" },
    header: {
        padding: '18',
        backgroundColor: 'white',
        display: 'flex',

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
        "&:focus": {
            outline: 'unset'
        },
        newTweetBtn: {
            color: "white !important",
            borderRadious: "1rem !important",
            minHeight: "30px !important",
            height: "30px !important",
            fontFamily: "shabnam",
            lineHeight: "1rem !important",
            minWidth: "5rem !important"
        },
        newTweetImg: {

        },
        newTweetImgBtn: {
            border: "1px solid #333",
            padding: ".2rem !important",
            borderRadious: "50%",
            marginLeft: "1rem"
        }

    }

})

export default useStyles;
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'white'
    },


    divider: {
        height: '100%',
        width: '1',
        backgroundColor: '#7EBAFF !important',
        filter: 'opacity(0.5)'
    }
    ,

    mainPart: {
        flex: 1,
        backgroundColor: 'yellow '
    },



});
export default useStyles;
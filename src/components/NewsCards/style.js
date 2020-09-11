import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    margin: '0 5px',
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 5,
  },
  container: {
    // padding: '0 5%',
    // width: '100%',
    margin: 'auto',

    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
});

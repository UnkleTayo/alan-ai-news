import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    margin: '5px',
  },
  container: {
    margin: 'auto',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

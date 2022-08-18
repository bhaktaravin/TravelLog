import { makeStyles } from '@mui/core/styles';

export default makeStyles((theme) => ({
  heading: {
    fontSize: '3rem',
    color: 'rgb(107 113 115)',
  },
  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontSize: '2rem',
    },
  }
}));
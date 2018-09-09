import { createMuiTheme } from '@material-ui/core/styles';

// Create our Material UI theme
export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#1ed760' }, // buttons before hover: #1db954
    secondary: { main: '#4caf50' },
  },
});

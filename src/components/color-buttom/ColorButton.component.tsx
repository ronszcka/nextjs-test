import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => (
    {
        root: {
            color: theme.palette.getContrastText(purple[500]),
            backgroundColor: '#3aafa9',
            '&:hover': {
                backgroundColor: '#33A29C',
            },
            textTransform: 'none',
            marginLeft: 'auto',
        },
    }
))(Button);

export default ColorButton;
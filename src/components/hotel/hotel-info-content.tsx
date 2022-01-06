import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import calendarIcon from '../../assets/Calendar_Icon_Large.svg';
import diamondIcon from '../../assets/Diamond_Icon.svg';
import giftIcon from '../../assets/Gift_Icon.svg';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const HotelInfoContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <Icon >
            <img src={ giftIcon}/>
          </Icon>
          <Item >item1</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Icon >
            <img src={ diamondIcon}/>
          </Icon>
          <Typography variant='body1' style={{height: '127px'}} >some cool text
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Icon >
            <img src={ calendarIcon}/>
          </Icon>
          <Item>item 3</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
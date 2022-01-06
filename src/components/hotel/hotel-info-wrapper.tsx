import Typography from '@mui/material/Typography';
import { HotelInfoContent } from './hotel-info-content';
import { ColorButton } from '../button/button';
import background from '../../assets/Hotel_Ad_Background@2x.png';
import { styles } from '../../@shared/styles';

export const HotelInfoWrapper = () => {
  const handleClick = () => {
    window.open('http://github.com', '_blank');
  };
  return (
    <div
      style={{
        position: 'absolute',
        border: '0.699999988079071px solid #9E9297',
        borderRadius: '5px',
        height: '230px',
        width: '95%',
        color: 'white',
        top: '410px',
      }}
    >
      <div style={{ position: 'relative' }}>
        <Typography variant='subtitle1'>Header here</Typography>
        <Typography variant='h5' style={{ color: styles.textColor }}>
          Hotel Nama
        </Typography>
        <HotelInfoContent />
        <ColorButton onClick={handleClick} variant='contained'>
          Contained
        </ColorButton>
        <img
          src={background}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            opacity: 0.4,
            zIndex: -1
          }}
        ></img>
      </div>
    </div>
  );
};

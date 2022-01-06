import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const HotelCard = () => {
  return (
    <Card
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 0,
        width: '100%',
      }}
      style={{ backgroundColor: 'transparent', display: 'relative' }}
    >
      <CardMedia
        component='img'
        height='425'
        image='https://picsum.photos/800/301/?random'
        alt='green iguana'
      />
    </Card>
  );
}
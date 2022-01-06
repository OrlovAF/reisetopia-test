import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { hotelActions } from './store/hotels/hotels.actions';
import { Slider } from './components/carousel';

function App() {
  const dispatch = useDispatch();
  const hotels = useSelector((state: RootState) => state.hotels);
  console.log('app hotels - ', hotels);

  useEffect(() => {
    dispatch(hotelActions.getHotels());
  }, [dispatch]);

  return (
    <div className='App'>
      <div>some list here.....</div>
      <ul>
        {/* {hotels.map((el: IHotel) => {
          return <li key={el.id}>{el.name['en-US']}</li>;
        })} */}
      </ul>
      <Slider list={hotels.slice(0,5)} />
    </div>
  );
}

export default App;

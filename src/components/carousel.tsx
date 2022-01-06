import * as cars from '3d-react-carousal';
import { ThemeProvider } from '@emotion/react';
import { IHotel } from '../types/hotels.types';
// import * as React from 'react';
import { HotelCard } from './hotel/hotel-card';
import { HotelInfoWrapper } from './hotel/hotel-info-wrapper';
import { globalTheme } from '../@shared/styles'

const { Carousel }: any = cars;

export function Slider({ list }: { list: IHotel[] }) {
  console.log('list lng- ', list.length);

  let slides = list.map((el) => {
    return (
      <>
        <HotelCard />
        <HotelInfoWrapper />
      </>
    );
  });

  return (
    <ThemeProvider theme={globalTheme}>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'></h1>
        </header>
      This is our carousal Component:
        <br />
        <br />
        <br />
        <Carousel slides={slides} />
      </div>
    </ThemeProvider>
  );
}








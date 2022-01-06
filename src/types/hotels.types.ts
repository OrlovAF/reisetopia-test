interface ILngAttr {
  'en-US'?: string;
  'de-DE'?: string;
  'fr-FR'?: string;
  'es-ES'?: string;
}

export interface IHotel {
  id: number;
  minPrice: number;
  currencyCode: string;
  countryCode: string;

  name: ILngAttr;
  address: ILngAttr;
  city: ILngAttr;
  description: ILngAttr;

  benefits: {
    text: ILngAttr;
  }[];

  deals: {
    expireTime: string;
    headLine: ILngAttr;
    details: ILngAttr;
  }[];

  images: {
    url: string;
    caption: ILngAttr;
  }[];
  lat?: number;
  lng?: number;
}

export interface IApiResponse {
  success: boolean;
  error?: string;
  result: IHotel[];
}

export interface IResponse {
  data: IApiResponse;
}

export const HOTELS_ENDPOINT =
  'https://61d480b38df81200178a8d15.mockapi.io/hotels-redesign/freelancer-task/hotels';
export const BASE_URL = 'https://reisetopia.de';

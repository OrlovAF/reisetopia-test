import axios, {AxiosInstance} from 'axios';

export interface MetaRequest {
  page: number;
  limit: number;
  total: number;
}

function createClient():AxiosInstance {
  return axios.create();
}

export const apiService = createClient();

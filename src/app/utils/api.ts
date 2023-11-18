import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  API_BASE_URL,
  API_ENDPOINT,
  TIME_TRUNC,
  GEO_TRUNC,
  GeoId,
  GeoLimit,
} from './apiConfig';

import ApiResponse from './apiResponse';

export const fetchPeninsularToday = async (): Promise<ApiResponse> => {
  const now = new Date();
  const start_date = now.toISOString().slice(0, 16);
  const end_date = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16);

  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${API_BASE_URL}/${API_ENDPOINT}`,
      {
        params: {
          start_date: start_date,
          end_date: end_date,
          time_trunc: TIME_TRUNC,
          geo_trunc: GEO_TRUNC,
          geo_limit: GeoLimit.PENINSULAR,
          geo_ids: GeoId.PENINSULAR,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('API Error: Unexpected response status', response.status);
      throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('API Error:', axiosError.message || axiosError.response?.data);
    throw new Error('Failed to fetch data from the API');
  }
};

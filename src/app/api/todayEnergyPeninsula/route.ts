// pages/api/yourApiRoute.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  API_BASE_URL,
  API_ENDPOINT,
  TIME_TRUNC,
  GEO_TRUNC,
  GeoId,
  GeoLimit,
} from '../../../../types/apiConfig'; 

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Response> {
  try {
    const now = new Date();
    const start_date = now.toISOString().slice(0, 16);
    const end_date = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16);

    const response: AxiosResponse = await axios.get(
      `${API_BASE_URL}${API_ENDPOINT}`,
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
      return new Response(JSON.stringify(response.data), {status:200, headers:[["content-type","application/json"]]});
    } else {
      console.error('API Error: Unexpected response status', response.status);
      throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
    }
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error('API Error:', axiosError.message || axiosError.response?.data);
    return new Response(JSON.stringify({"error":"Server error"}), { status: 500 });

  }
}

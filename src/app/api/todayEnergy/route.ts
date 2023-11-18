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
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  res: NextApiResponse
): Promise<Response> {

  const province =  req.nextUrl.searchParams.get('province') as string

  try {
    
    const now = new Date();
    console.log(now)
    now.setHours(1,0,0,0)
    console.log(now)
    const start_date = now.toISOString().slice(0, 16);
    const end_date = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16);

    const geo_limit_key = Object.keys(GeoLimit).find(
      (key): key is keyof typeof GeoLimit =>
        key.toUpperCase() === province.toUpperCase().replace(/ /g, '_')
    );
    const geo_limit = geo_limit_key ? GeoLimit[geo_limit_key] : null;


    const geo_id_key = Object.keys(GeoId).find(
      (key): key is keyof typeof GeoId =>
        key.toUpperCase() === province.toUpperCase().replace(/ /g, '_')
    );
    const geo_id = geo_id_key ? GeoId[geo_id_key] : null;

    console.log(geo_limit)
    console.log(geo_id)
    console.log(start_date)
    console.log(end_date)
    
    const response: AxiosResponse = await axios.get(
      `${API_BASE_URL}${API_ENDPOINT}`,
      {
        params: {
          start_date: start_date,
          end_date: end_date,
          time_trunc: TIME_TRUNC,
          geo_trunc: GEO_TRUNC,
          geo_limit: geo_limit,
          geo_ids: geo_id
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

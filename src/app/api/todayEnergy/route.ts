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
  try {
    
    const now = new Date();
    const end = new Date()

    now.setHours(1,0,0,0)
    end.setHours(24,0,0,0)

    const start_date = now.toISOString().slice(0, 16);
    const end_date = end.toISOString().slice(0, 16);
    
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const geo_limit = userTimeZone === "WET" ? GeoLimit.CANARIAS : GeoLimit.PENINSULAR
    const geo_id = userTimeZone === "WET" ? GeoId.CANARIAS : GeoId.PENINSULAR

    
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

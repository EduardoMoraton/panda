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

import { transformApiResponse } from '~/utils/transformFromApiResponse';
import { json } from 'stream/consumers';

export async function GET(
  req: NextRequest,
  res: NextApiResponse
): Promise<Response> {
  try {

    const query_start = req.nextUrl.searchParams.get('start_date')
    const query_end = req.nextUrl.searchParams.get('end_date')
    let now: Date
    let end: Date

    if (query_start === null || query_end === null) {
      now = new Date();
      end = new Date();
      now.setHours(1, 0, 0, 0);
      end.setHours(24, 0, 0, 0);
    } else {
      now = new Date(query_start)
      end = new Date(query_end)
    }
   

    
    
    const startDate = now.toISOString().slice(0, 16);
    const endDate = end.toISOString().slice(0, 16);
    
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const geoLimit = userTimeZone === "WET" ? GeoLimit.CANARIAS : GeoLimit.PENINSULAR;
    const geoId = userTimeZone === "WET" ? GeoId.CANARIAS : GeoId.PENINSULAR;
    
    const response: AxiosResponse = await axios.get(
      `${API_BASE_URL}${API_ENDPOINT}`,
      {
        params: {
          start_date: startDate,
          end_date: endDate,
          time_trunc: TIME_TRUNC,
          geo_trunc: GEO_TRUNC,
          geo_limit: geoLimit,
          geo_ids: geoId
        },
      }
    );

    if (response.status === 200) {
      return new Response(JSON.stringify(transformApiResponse(response.data)), { status: 200, headers: [['content-type', 'application/json']] });
    } else {
      console.error('API Error: Unexpected response status', response.status);
      throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
    }
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error('API Error:', axiosError.message || axiosError.response?.data);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

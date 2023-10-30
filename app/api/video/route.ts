import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

const RAPID_API_URL = process.env.RAPID_API_URL
const RAPID_API_KEY = process.env.RAPID_API_KEY
const RAPID_API_HOST = process.env.RAPID_API_HOST

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl.searchParams.get('url')!
  const response = await axios.get(url)
  const fullUrl = response.request.res.responseUrl

  const options = {
    method: 'GET',
    url: RAPID_API_URL,
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST
    },
    params: {
      url: fullUrl
    }
  }

  try {
    const response = await axios.request(options)

    if (response.status == 200) {
      return NextResponse.json(
        response.data,
        { status: response.status },
      )
    }
    
    return NextResponse.json(
      null,
      { status: response.status },
    )
  } catch (e) {
    return NextResponse.json(
      null,
      { status: 500 },
    )
  }
}

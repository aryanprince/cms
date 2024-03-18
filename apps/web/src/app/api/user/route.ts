import { NextResponse, type NextRequest } from 'next/server';
import db from '../../../db';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  if (!token) {
    return NextResponse.redirect(new URL('/invalidsession', req.url));
  }
  const user = await db.user.findFirst({
    where: {
      token,
    },
  });
  return NextResponse.json({
    user,
  });
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Get users from environment variable
    const usersJson = process.env.AUTH_USERS_JSON;
    if (!usersJson) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const users = JSON.parse(usersJson);

    // Validate credentials
    if (users[username.toLowerCase()] === password) {
      return NextResponse.json({
        success: true,
        username: username.toLowerCase(),
        message: 'Authentication successful'
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 400 }
    );
  }
}

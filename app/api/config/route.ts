import { NextResponse } from 'next/server'

// Secure credentials - stored server-side only
// To modify users, edit this file or use environment variables
const SECURE_CONFIG = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBReeUyH3K8q5r8hQAGjEVt-J9U4DVCtNY',
  users: JSON.parse(process.env.AUTH_USERS_JSON || JSON.stringify({
    // ===== EDIT USER CREDENTIALS HERE =====
    'valens': 'kjwhrkuwer9834234',
    'googlechroma': 'chromaAdmin2024!',
    'c31ws': 'oprekworkl829321394',
    'c31nk': 'q234532905uoiuriowe',
    'c31xy': 'wkehr324rwer',
    'admin123': 'admin123'
    // =====================================
  }))
}

export async function GET() {
  return NextResponse.json({
    youtubeApiKey: SECURE_CONFIG.youtubeApiKey,
    users: SECURE_CONFIG.users
  })
}

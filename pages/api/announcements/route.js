import { NextResponse } from 'next/server';
import { createAnnouncement } from '../../../src/controllers/announcementController';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate the parsed body
    if (!body.title || !body.description || !body.author) {
      return NextResponse.json({
        message: "Missing required fields: title, description, or author",
      }, { status: 400 });
    }

    const newAnnouncement = await createAnnouncement(body, NextResponse);

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating announcement', error: error.message }, { status: 500 });
  }
}

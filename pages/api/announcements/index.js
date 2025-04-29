// pages/api/announcements/index.js
import {
    getAnnouncements,
    createAnnouncement
  } from '../../../src/controllers/announcementController';
  
  export default async function handler(req, res) {
    if (req.method === 'GET') {
      return getAnnouncements(req, res);
    } else if (req.method === 'POST') {
      return createAnnouncement(req, res);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
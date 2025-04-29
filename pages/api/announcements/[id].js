// pages/api/announcements/[id].js
import {
    getAnnouncementById,
    updateAnnouncement,
    deleteAnnouncement
  } from '@/controllers/announcementController';
  
  export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      return getAnnouncementById(req, res);
    } else if (req.method === 'PUT') {
      return updateAnnouncement(req, res);
    } else if (req.method === 'DELETE') {
      return deleteAnnouncement(req, res);
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
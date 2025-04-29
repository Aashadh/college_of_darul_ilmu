const express = require('express');
const router = express.Router();
const {
  getAnnouncements,
  createAnnouncement,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement
} = require('../../src/controllers/announcementController');

// Routes
router.get('/', getAnnouncements);
router.post('/', createAnnouncement);
router.get('/:id', getAnnouncementById);
router.put('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

module.exports = router;

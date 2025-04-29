const Announcement = require('../models/Announcement');

// Get all announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create a new announcement
exports.createAnnouncement = async (data, res) => {
  const { title, description, author } = data;
  console.log("Raw input to createAnnouncement:", data);
  console.log("Data received in createAnnouncement:", data);
  try {
    const newAnnouncement = new Announcement({ title, description, author });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (err) {
    console.error('Error in createAnnouncement:', err); // Log the error
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get an announcement by ID
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    //convert dates safely
    const formattedAnnouncements = announcements.map(a => ({
      ...a.toObject(),
      createdAt: a.createdAt.toISOString(), // server & client will see same
    }));

    res.status(200).json(formattedAnnouncements);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update an announcement by ID
exports.updateAnnouncement = async (req, res) => {
  const { id } = req.query;
  try {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!updatedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json(updatedAnnouncement);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete an announcement by ID
exports.deleteAnnouncement = async (req, res) => {
  const { id } = req.query;
  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if (!deletedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json({ message: 'Announcement deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

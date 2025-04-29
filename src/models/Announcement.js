const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String },
  date: { type: Date, default: Date.now },
  author: { type: String },
  category: { type: String },
  isVisible: { type: Boolean, default: true },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.Announcement || mongoose.model('Announcement', announcementSchema);

// app/announcements/page.jsx
"use client";
import { useEffect, useState } from "react";

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("api/announcements");
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <ul className="space-y-4">
        {announcements.map((a) => (
          <li key={a._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{a.title}</h2>
            <p className="text-gray-600">{a.description}</p>
            <small className="text-gray-400">By {a.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

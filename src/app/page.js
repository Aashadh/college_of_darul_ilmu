"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';  // Import Link for navigation

export default function Home() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch announcements from API
  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('api/announcements');
        if (!res.ok) {
          throw new Error('Failed to fetch announcements');
        }
        const data = await res.json();
        setAnnouncements(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <h2>Announcements</h2>
      
      {/* Displaying loading message */}
      {loading ? (
        <p>Loading announcements...</p>
      ) : (
        <ul>
          {announcements.map((announcement) => (
            <li key={announcement._id} className="border-b py-4">
              <h3 className="text-xl font-semibold">{announcement.title}</h3>
              <p>{announcement.description}</p>
              <small>By: {announcement.author}</small>
            </li>
          ))}
        </ul>
      )}
      
      {/* Button to navigate to the Admin Page */}
      <Link href="/admin" passHref>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-6">
          Go to Admin Page
        </button>
      </Link>
    </div>
  );
}

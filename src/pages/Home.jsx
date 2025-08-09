import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate()
 return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">🎵 Welcome to Music Explorer</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Search your favourite artists, explore their releases, and save the ones
        you love. Click the ⭐ icon to add releases to your favourites list.
      </p>
      <button
        onClick={() => navigate("/musicbrainz")}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Start Exploring
      </button>
    </div>
  );
}

export default Home
import React from "react";
import { Link } from "react-router";
import { FaLastfm, FaStar } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="bg-black h-12 w-full px-4 flex items-center ">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-gray-400 text-center text-md">
          <span>
            <TiHome />
          </span>
        </Link>
        <Link to="/musicbrainz" className="text-gray-400 text-center text-md">
          MusicBrainz
        </Link>
        <div className="flex items-center gap-1 ">
          <FaLastfm color="red" size={20} className="mt-1" />
          <Link to="/lastfm" className="text-gray-400 text-center text-md">
            Last.fm
          </Link>
        </div>
        <div className="flex items-center gap-1 ">
          <FaStar color="yellow" size={16} />
          <Link to="/favourites" className="text-gray-400 text-center text-md">
            Favourites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

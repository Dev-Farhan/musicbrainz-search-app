import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../features/Favourite/favouriteSlice";
import { AiFillMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

const Favourites = () => {
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourite.items);
  const dispatch = useDispatch();
  const [expandedArtistId, setExpandedArtistId] = useState(null);

  const toggleReleases = (artistId) => {
    setExpandedArtistId((prev) => (prev === artistId ? null : artistId));
  };

  return (
    <div className="mt-10 px-10">
      <h2 className="text-3xl font-semibold mb-4">Favourites</h2>

      <table className="w-full border-collapse">
        <thead>
          {favourites.length > 0 ? (
            <tr className="border-b border-gray-300 bg-gray-100">
              <th className="p-2 text-center"></th>
              <th className="p-2 text-left">Artist Name</th>
              <th className="w-[150px] p-2"></th>
            </tr>
          ) : (
            <tr>
              <td
                colSpan="3"
                className="p-6 text-center text-gray-500 italic bg-gray-50"
              >
                ⭐ You haven’t added any favourites yet.
                <br />
                Start exploring artists and click the star to save them here!{" "}
                <br />
                <button
                  onClick={() => navigate("/musicbrainz")}
                  className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Start Exploring
                </button>
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {favourites.map((artist) => (
            <React.Fragment key={artist.id}>
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="p-2 text-center">
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => dispatch(removeFromFavourite(artist.id))}
                  >
                    <AiFillMinusCircle color="red" />
                  </button>
                </td>
                <td className="p-2 text-center">
                  {artist.name ? artist.name : artist.title}
                </td>
                <td className="text-right p-2">
                  <button
                    className="text-blue-500 text-sm"
                    onClick={() => toggleReleases(artist.id)}
                  >
                    {expandedArtistId === artist.id
                      ? "Hide releases"
                      : "Show releases"}
                  </button>
                </td>
              </tr>

              {/* {expandedArtistId === artist.id &&
                artist.releases?.length > 0 && (
                  <tr>
                    <td colSpan="2" className="p-0">
                      <table className="w-full border-t border-gray-200 bg-gray-50">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="p-2">Year</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Label</th>
                            <th className="p-2">Tracks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {artist.releases.map((release) => (
                            <tr
                              key={release.id}
                              className="border-b border-gray-200"
                            >
                              <td className="p-2 text-center">
                                {release.date ? release.date.slice(0, 4) : ""}
                              </td>
                              <td className="p-2 text-center">
                                {release.title}
                              </td>
                              <td className="p-2 text-center">
                                {release.label || "-"}
                              </td>
                              <td className="p-2 text-center">
                                {release.trackCount || "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )} */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favourites;

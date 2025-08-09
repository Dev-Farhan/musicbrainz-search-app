import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../features/Favourite/favouriteSlice";

const MusicbrainzTable = ({ data }) => {

  const favourites = useSelector((state) => state.favourite.items);
  const dispatch = useDispatch();
  // console.log("favourites", favourites);
  //   const isFavourite = (id) => favourites.some((item) => item.id === id);
  const isFavourite = (id) => favourites.some((item) => item.id === id);

  const [expandedArtistId, setExpandedArtistId] = useState(null);
  const [artistReleases, setArtistReleases] = useState({});
const [isLoading, setIsLoading] = useState(false);

  const toggleReleases = async (artistId, artistName) => {
    if (expandedArtistId === artistId) {
      setExpandedArtistId(null);
      return;
    }

    if (!artistReleases[artistId]) {
      setIsLoading(true)
      try {
        const res = await fetch(
          `https://musicbrainz.org/ws/2/release/?query=artist:${encodeURIComponent(
            artistName
          )}&fmt=json`
        );
        const data = await res.json();
        // console.log('Releaseeeeeeeeeeeeeeeeeee',data)
        setArtistReleases((prev) => ({
          ...prev,
          [artistId]: data?.releases || [],
        }));
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching releases:", error);
        setIsLoading(false)
      }
    }

    setExpandedArtistId(artistId);
  };

  return (
    <div className="mt-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left p-2">Artist Name</th>
            <th className="w-[50px] p-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr className="border-b border-gray-300  hover:bg-gray-100 transition">
                <td className="p-1">{item.name}</td>
                <td className="p-1 text-right whitespace-nowrap">
                  <button
                    className="text-xs text-blue-400 cursor-pointer"
                    onClick={() => toggleReleases(item.id, item.name)}
                  >
                    {expandedArtistId === item.id
                      ? "Hide releases"
                      : "Show releases"}
                  </button>
                </td>
              </tr>

              {expandedArtistId === item.id &&
                artistReleases[item.id]?.length > 0 && (
                  <tr>
                    <td colSpan="2" className="p-0">
                      <table className="w-full border-t border-gray-200 bg-gray-50">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="p-1"></th>
                            <th className="p-1">Year</th>
                            <th className="p-1">Title</th>
                            <th className="p-1">Release label</th>
                            <th className="p-1">Number of tracks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {artistReleases[item.id].map((release) => (
                            <tr
                              key={release.id}
                              className="border-b border-gray-200"
                            >
                              <td className="p-2 text-center">
                                {isFavourite(release.id) ? (
                                  <FaStar
                                    className="text-yellow-500 cursor-pointer"
                                    onClick={() =>
                                      dispatch(removeFromFavourite(release.id))
                                    }
                                  />
                                ) : (
                                  <FaRegStar
                                    className="text-gray-500 cursor-pointer"
                                    onClick={() =>
                                      //   dispatch(addToFavourite(item))
                                      dispatch(
                                        addToFavourite({
                                          id: release.id,
                                          title: release.title,
                                          artist: item.name,
                                          date: release.date,
                                          label:
                                            release["label-info"]?.[0]?.label
                                              ?.name || "",
                                          trackCount:
                                            release["track-count"] ?? "",
                                        })
                                      )
                                    }
                                  />
                                )}
                              </td>
                              <td className="p-2 text-center">
                                {release.date ? release.date.slice(0, 4) : ""}
                              </td>
                              <td className="p-2 text-center">
                                {release?.title || ""}
                              </td>
                              <td className="p-2 text-center">
                                {release["label-info"]?.[0]?.label?.name || ""}
                              </td>
                              <td className="p-2 text-center">
                                {release["track-count"] ?? ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicbrainzTable;

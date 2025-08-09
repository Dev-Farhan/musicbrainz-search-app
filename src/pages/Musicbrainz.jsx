import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import MusicbrainzTable from "../components/MusicbrainzTable";
import Loader from "../components/Loader";

const Musicbrainz = () => {
  const [query, setQuery] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getMusicbrainzData = async () => {
    setIsLoading(true);
    if (!query.trim()) return;
    try {
      const res = await fetch(
        `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(
          query
        )}&fmt=json`
      );
      const data = await res.json();
      // console.log("API Response:", data?.artists);
      // console.log("API Response cleanedData:", cleanedData);
      setArtistData(data?.artists || []);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="px-10">
      <div>
        <Searchbar
          title={"Musicbrainz"}
          query={query}
          setQuery={setQuery}
          onSearch={getMusicbrainzData}
        />
        <div className="mt-20">
          {artistData.length > 0 ? (
            <>
              <h1 className="text-3xl border-b-2 border-gray-300 pb-2">
                Search Results:
              </h1>
              <MusicbrainzTable data={artistData} />
            </>
          ) : (
            !isLoading && (
              <h1 className="text-xl text-gray-500 italic text-center">
                Start typing an artist name to explore their music releases 🎵
              </h1>
            )
          )}

          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default Musicbrainz;

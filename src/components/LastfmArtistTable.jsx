import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToShortlist, removeFromShortlist } from "../features/LastFm/shortlistSlice";

const ArtistTable = ({ data }) => {
  const dispatch = useDispatch();
  const shortlist = useSelector((state) => state.shortlist.items); 

  const isInShortlist = (id) => shortlist.some((artist) => artist.id === id);

  return (
    <div className="mt-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="w-[100px] p-2"> </th>
            <th className="text-left p-2">Artist Name</th>
            <th className="w-[50px] p-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const inShortlist = isInShortlist(item.id);

            return (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-100 transition"
              >
                <td className="p-2">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
                      N/A
                    </div>
                  )}
                </td>
                <td className="p-2 text-blue-600">{item.name}</td>
                <td className="p-2 text-right">
                  {inShortlist ? (
                    <FaMinusCircle
                      className="text-red-600 text-lg cursor-pointer"
                      onClick={() => dispatch(removeFromShortlist(item.id))}
                    />
                  ) : (
                    <FaPlusCircle
                      className="text-green-600 text-lg cursor-pointer"
                      onClick={() => dispatch(addToShortlist(item))}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistTable;

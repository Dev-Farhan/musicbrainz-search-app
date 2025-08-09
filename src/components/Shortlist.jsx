import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../features/Favourite/favouriteSlice";

const Shortlist = ({ handleClose }) => {
  const items = useSelector((state) => state.shortlist.items);
  const favourites = useSelector((state) => state.favourite.items);

  const isFavourite = (id) => favourites.some((item) => item.id === id);
  const dispatch = useDispatch();
  return (
    <div className="mt-5  p-4">
      <div className="flex items-center justify-between border-b-2 border-gray-300">
        <h2 className="text-xl font-semibold pb-2 mb-2">My short list.</h2>
        <span className="border rounded-full p-1 cursor-pointer hover:bg-gray-100 transition">
          <IoMdClose size={16} className="rounded-3xl" onClick={handleClose} />
        </span>
      </div>
      <table className="w-full border-collapse mt-8">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="w-[40px]"></th>
            <th className="text-left text-lg font-semibold py-3">
              Artist Name
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-300">
              <td className="p-2 text-center">
                {isFavourite(item.id) ? (
                  <FaStar
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => dispatch(removeFromFavourite(item.id))}
                  />
                ) : (
                  <FaRegStar
                    className="text-gray-500 cursor-pointer"
                    onClick={() => dispatch(addToFavourite(item))}
                  />
                )}
              </td>
              <td className="p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shortlist;

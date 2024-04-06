import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ListingItem({ listing }) {
  const { currentUser } = useSelector((state) => state.user);
  const createWishlist = async (listing) => {
    try {
      const itemtoadd = listing;
      console.log(itemtoadd);
      const res = await fetch("/api/wishlist/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...itemtoadd,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white relative shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <div
        onClick={() => createWishlist(listing)}
        className="absolute right-0 z-10 p-2 text-xl text-white cursor-pointer hover:text-red-500"
      >
        <FaHeart />
      </div>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="flex flex-col w-full gap-2 p-3">
          <p className="text-lg font-semibold truncate text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="w-4 h-4 text-green-700" />
            <p className="w-full text-sm text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="mt-2 font-semibold text-slate-500 ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex gap-4 text-slate-700">
            <div className="text-xs font-bold">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="text-xs font-bold">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

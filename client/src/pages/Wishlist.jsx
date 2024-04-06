import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [wishlistData, setWishlistData] = useState([]);
  const handleShowListings = async () => {
    try {
      const res = await fetch(`/api/wishlist/list/${currentUser._id}`);
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        console.log("Failure!");
        return;
      }
      setWishlistData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleShowListings();
  }, []);

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/wishlist/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setWishlistData((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        {wishlistData && wishlistData.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-center mt-7">
              Your Wishlist
            </h1>
            {wishlistData.map((listing) => (
              <div
                key={listing._id}
                className="flex items-center justify-start gap-4 p-1 border rounded-lg"
              >
                <Link to={`/listing/${listing._id}`}>
                  <img
                    src={listing.imageUrls[0]}
                    alt="listing cover"
                    className="object-contain w-80 h-80"
                  />
                </Link>
                <Link
                  className="font-semibold truncate text-slate-700 hover:underline"
                  to={`/listing/${listing._id}`}
                >
                  <p>{listing.name}</p>
                </Link>
                <div className="flex flex-col item-center">
                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="text-red-700 uppercase"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-semibold text-center mt-7">
            Your Wishlist is Empty !
          </h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

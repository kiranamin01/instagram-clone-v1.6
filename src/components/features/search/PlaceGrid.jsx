import { placesData } from "../../../data/placesData";
import { MapPin } from "lucide-react";

const PlaceGrid = ({ searchQuery }) => {
  const filteredPlaces = placesData.filter((place) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      place.place.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query)
    );
  });

  return (
    <section className="grid grid-cols-1 gap-4 p-4">
      {filteredPlaces.length === 0 && searchQuery ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No results found for "{searchQuery}"
          </p>
        </div>
      ) : (
        filteredPlaces.map((place, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <MapPin className="dark:text-white border border-gray-500 rounded-full p-1.5 min-w-[38px] min-h-[38px]" />
            <div className="">
              <h3 className="font-semibold text-sm dark:text-white">
                {place.place}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {place.location}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default PlaceGrid;

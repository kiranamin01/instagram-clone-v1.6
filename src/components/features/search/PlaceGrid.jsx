import { placesData } from "../../../data/placesData";
import { MapPin } from "lucide-react";

const PlaceGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-4 p-4 ">
      {placesData.map((place, index) => (
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
      ))}
    </section>
  );
};

export default PlaceGrid;

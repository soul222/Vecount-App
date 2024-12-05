import { BarChart2, Bike, Truck, Car } from "lucide-react";

// Component Pakcage
import StatsCard from "../components/Card/Cardstats";
import CardTitle from "../components/Card/CardTitile";
import DataOverview from "../components/Card/CardOverview";
import DeviceInformation from "../components/Card/CardDeviceInfo";
import TrafficVehicle from "../components/Chart/TrafficVehcile";

//  Data Dummy Import
import TrafficData from "../utils/Data/Dummy/TrafficData";

const Overview = () => {
  const currentDate = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions)
    .format(currentDate)
    .replace(",", "");

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          🚀 Welcome Thomas!
        </h2>
        {/* Date */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{formattedDate}</p>
      </div>

      <CardTitle />
      <DeviceInformation />
      <DataOverview />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 my-4">
        <StatsCard
          name="Total Vehicles"
          icon={BarChart2}
          value="14,146"
          color="#10B981"
        />
        <StatsCard name="Cars" icon={Car} value="12,345" color="#3B82F6" />
        <StatsCard name="Trucks" icon={Truck} value="1,234" color="#F59E0B" />
        <StatsCard name="Motorcycles" icon={Bike} value="567" color="#EC4899" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 my-4">
        <TrafficVehicle TrafficData={TrafficData} />
      </div>
    </>
  );
};

export default Overview;

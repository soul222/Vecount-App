import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";

  
  const TrafficVehicle = ({ TrafficData }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Traffic Vehicle Trend</h2>
        <div className="h-80">
          <ResponsiveContainer>
            <LineChart data={TrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend />
  
              {/* Garis untuk Total Kendaraan */}
              <Line
                type="monotone"
                dataKey="total"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ stroke: "#10B981", strokeWidth: 2 }}
              />
  
              {/* Garis untuk Mobil */}
              <Line
                type="monotone"
                dataKey="car"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ stroke: "#3B82F6", strokeWidth: 2 }}
              />
  
              {/* Garis untuk Truk */}
              <Line
                type="monotone"
                dataKey="truck"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ stroke: "#F59E0B", strokeWidth: 2 }}
              />
  
              {/* Garis untuk Motor */}
              <Line
                type="monotone"
                dataKey="motorcycle"
                stroke="#EC4899"
                strokeWidth={2}
                dot={{ stroke: "#EC4899", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default TrafficVehicle;
  
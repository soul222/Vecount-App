const DataOverview = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg my-4">
      <h2 className="text-lg font-semibold">Data Overview</h2>

      <form className="flex items-center space-x-2">
        <label htmlFor="date-range" className="sr-only">
          Date Range
        </label>
        <select
          id="date-range"
          className="appearance-none bg-white px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="04-11-2024_14-11-2024">
            04 Nov 2024 - 14 Nov 2024
          </option>
          <option value="15-11-2024_25-11-2024">
            15 Nov 2024 - 25 Nov 2024
          </option>
          <option value="26-11-2024_05-12-2024">
            26 Nov 2024 - 05 Dec 2024
          </option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default DataOverview;

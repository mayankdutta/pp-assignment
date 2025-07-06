const InputSelect = ({ options }) => {
  return (
    <select
      className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
             w-full sm:w-36 md:w-48 lg:w-60"
    >
      {options.map((data) => (
        <option>{data}</option>
      ))}
    </select>
  );
};

export default InputSelect;

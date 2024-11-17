import React, { useState } from 'react';

function DropdownSelector() {
  // State to hold the selected value
  const [selectedValue, setSelectedValue] = useState('empty');
  const [selectedYear, setSelectedYear] = useState('empty');

  const data = {
    ToyotaAvalon: [2021, 2022, 2023, 2024, 2025],
    ToyotaCorollaHybrid: [2021, 2022, 2023, 2024, 2025],
  };

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
    setSelectedYear(''); // Reset second dropdown when category changes
  };

  // Handle changes for the second dropdown
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const itemDetails = {
    ToyotaAvalon: {
      2021: 'Category 1, Item 1 description.',
      2022: 'Category 1, Item 2 description.',
      2023: 'Category 1, Item 3 description.',
      2024: 'Category 1, Item 4 description.',
      2025: 'Category 1, Item 5 description.',
    },
    ToyotaCorollaHybrid: {
      2021: 'Category 2, Item 1 description.',
      2022: 'Category 2, Item 2 description.',
      2023: 'Category 2, Item 3 description.',
      2024: 'Category 2, Item 4 description.',
      2025: 'Category 2, Item 5 description.',
    },
  };

  return (
    <div className="p-4">
      {/* First Dropdown */}
      <select
        value={selectedValue}
        onChange={handleValueChange}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value="" disabled>
          Select a category
        </option>
        {Object.keys(data).map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>

      {/* Second Dropdown */}
      {selectedValue && (
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border border-gray-300 rounded mb-4 ml-4"
        >
          <option value="" disabled>
            Select an item
          </option>
          {data[selectedValue]?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      {/* Display Content */}
      {selectedValue && selectedYear && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl">
          <p>{itemDetails[selectedValue][selectedYear]}</p>
          </h2>
        </div>
      )}
    </div>
  );
}


export default DropdownSelector;

import React, { useState } from 'react';

function DropdownSelector() {
  // State to hold the selected values
  const [selectedCompany, setselectedCompany] = useState('empty'); //make company
  const [selectedModel, setselectedModel] = useState('empty'); //make model
  const [selectedYear, setselectedYear] = useState('empty'); //make year

  // Data for dropdowns (company -> model -> year)
  const data = {
    ToyotaAvalon: { 
      2021: ['Item 1', 'Item 2', 'Item 3'],
      2022: ['Item 1', 'Item 2', 'Item 3'],
      2023: ['Item 1', 'Item 2', 'Item 3'],
      2024: ['Item 1', 'Item 2', 'Item 3'],
      2025: ['Item 1', 'Item 2', 'Item 3'],
    },
    ToyotaCorollaHybrid: {
      2021: ['Item A', 'Item B', 'Item C'],
      2022: ['Item A', 'Item B', 'Item C'],
      2023: ['Item A', 'Item B', 'Item C'],
      2024: ['Item A', 'Item B', 'Item C'],
      2025: ['Item A', 'Item B', 'Item C'],
    },
  };

  const itemDetails = {
    ToyotaAvalon: {
      2021: {
        'Item 1': 'Toyota Avalon 2021, Item 1 description.',
        'Item 2': 'Toyota Avalon 2021, Item 2 description.',
        'Item 3': 'Toyota Avalon 2021, Item 3 description.',
      },
      2022: {
        'Item 1': 'Toyota Avalon 2022, Item 1 description.',
        'Item 2': 'Toyota Avalon 2022, Item 2 description.',
        'Item 3': 'Toyota Avalon 2022, Item 3 description.',
      },
      // Add other years here...
    },
    ToyotaCorollaHybrid: {
      2021: {
        'Item A': 'Toyota Corolla Hybrid 2021, Item A description.',
        'Item B': 'Toyota Corolla Hybrid 2021, Item B description.',
        'Item C': 'Toyota Corolla Hybrid 2021, Item C description.',
      },
      2022: {
        'Item A': 'Toyota Corolla Hybrid 2022, Item A description.',
        'Item B': 'Toyota Corolla Hybrid 2022, Item B description.',
        'Item C': 'Toyota Corolla Hybrid 2022, Item C description.',
      },
      // Add other years here...
    },
  };

  // Handle changes for the first dropdown (model)
  const handleCompanyChange = (event) => {
    setselectedCompany(event.target.value);
    setselectedModel('empty'); // Reset year when model changes
    setselectedYear('empty'); // Reset item when model changes
  };

  // Handle changes for the second dropdown (year)
  const handleModelChange = (event) => {
    setselectedModel(event.target.value);
    setselectedYear('empty'); // Reset item when year changes
  };

  // Handle changes for the third dropdown (item)
  const handleYearChange = (event) => {
    setselectedYear(event.target.value);
  };

  return (
    <div className="p-4">
      {/* First Dropdown: Select Model */}
      <select
        value={selectedCompany}
        onChange={handleCompanyChange}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value="empty" disabled>Select a car model</option>
        {Object.keys(data).map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>

      {/* Second Dropdown: Select Year (only if a model is selected) */}
      {selectedCompany !== 'empty' && (
        <select
          value={selectedModel}
          onChange={handleModelChange}
          className="p-2 border border-gray-300 rounded mb-4"
        >
          <option value="empty" disabled>Select a year</option>
          {Object.keys(data[selectedCompany]).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}

      {/* Third Dropdown: Select Item (only if both model and year are selected) */}
      {selectedCompany !== 'empty' && selectedModel !== 'empty' && (
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border border-gray-300 rounded mb-4"
        >
          <option value="empty" disabled>Select an item</option>
          {data[selectedCompany][selectedModel].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      {/* Display Content: Show description based on the selected values */}
      {selectedCompany !== 'empty' && selectedModel !== 'empty' && selectedYear !== 'empty' && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl">Selected Item: {selectedYear}</h2>
          <p>{itemDetails[selectedCompany][selectedModel][selectedYear]}</p>
        </div>
      )}
    </div>
  );
}

export default DropdownSelector;

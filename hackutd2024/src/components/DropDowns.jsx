import React, { useState } from 'react';
import Avalon from '../assets/avalon.webp';
import Sentra from '../assets/sentra.jpg';
import './DropDown.css';
import { FaGasPump } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";


function DropdownSelector() {
  // State to hold the selected values
  const [selectedCompany, setselectedCompany] = useState('empty'); //make company
  const [selectedModel, setselectedModel] = useState('empty'); //make model
  const [selectedYear, setselectedYear] = useState('empty'); //make year

  // Data for dropdowns (company -> model -> year)
  const data = {
    Acura: {

    },
  AlfaRomeo:{

  },
  AstonMartin:{

  },
  Audi:{

  },
  Bentley: {

  },
BMW:{

},
Bugatti:{

},
Buick:{

},
Cadillac: {

},
Chevrolet: {

},
Chrysler: {

},
Dodge: {

},
Ferrari: {

},
Fiat: {

},
Ford: {

},
Genesis: {

},
GMC: {

},
Honda: {

},
Hyundai: {

},
Infiniti: {

},
Jaguar: {

},
Jeep: {

},
Kia: {

},
Lamborghini: {

},
LandRover: {

},
Lexus: {

},
Lincoln: {

},
Lotus: {

},
Maserati: {

},
Mazda: {

},
McLaren: {

},
MercedesBenz: {

},
Mini: {

},
Mitsubishi: {

},
Nissan: {
  Altima: ['2021', '2023' ],
  Ariya:  ['2021', '2023' ],
  Armada:  ['2021', '2023' ],
  Frontier: ['2021', '2023' ],
  GTR: ['2021', '2023' ],
  Kicks: ['2021', '2023' ],
  Leaf: ['2021', '2023' ],
  Maxima: ['2021', '2023' ],
  Murano: ['2021', '2023' ],
  Pathfinder: ['2021', '2023' ],
  Rogue:['2021', '2023' ],
  RogueSport:['2021', '2023' ],
  Sentra :['2021', '2023' ],
  Titan:['2021', '2023' ],
  TitanXD:['2021', '2023' ],
  Versa:['2021', '2023' ],
  
},
Porsche: {

},
Ram: {

},
RollsRoyce: {

},
Subaru: {

},
Tesla: {
},
Toyota: {

      Avalon: ['2021', '2023' ],
      AvalonHybrid:  ['2021', '2023' ],
      Camry:  ['2021', '2023' ],
      CamryHybrid: ['2021', '2023' ],
      Corolla: ['2021', '2023' ],
      CorollaHybrid:['2021', '2023' ],
      Highlander: ['2021', '2023'],
      Mirai: ['2021', '2023' ],
      Prius: ['2021', '2023' ],
      PriusPrime: ['2021', '2023' ],
      RAV4: ['2021', '2023' ],
      RAV4Hybrid: ['2021', '2023' ],
      RAV4Prime: ['2021', '2023' ],
      Sienna: ['2021', '2023' ],
      Supra: ['2021', '2023' ],
      Yaris: ['2021', '2023' ],
      YarisHybrid: ['2021', '2023' ],
    },
    Volkswagen: {
      2021: ['Item A', 'Item B', 'Item C'],
      2022: ['Item A', 'Item B', 'Item C'],
      2023: ['Item A', 'Item B', 'Item C'],
      2024: ['Item A', 'Item B', 'Item C'],
      2025: ['Item A', 'Item B', 'Item C'],
    },
    Volvo: {

    },
  };


  const itemDetails = {
    Toyota: {
      Avalon: {
        '2021': (
          <>
            <h2 className="text-5xl font-extrabold">Toyota Avalon 2021</h2>
            
            {/* Image of the car */}
            <img
              src= {Avalon} 
              alt="Toyota Avalon 2021"
              className="w-64 h-40 object-cover my-4"
              height={200}
            />
  
            {/* MPG Combination */}
            <div className="mt-2">
              <FaGasPump />
              <h3 className="text-lg">25</h3>
              <h4 className="font-bold">MPG Combination</h4> 
            </div>
  
            {/* MPG City */}
            <div className="mt-2">
              <FaCity/>
              <h3 className="text-lg">22</h3>
              <h4 className="font-bold">MPG City</h4> 
            </div>
  
            {/* MPG Highway */}
            <div className="mt-2">
              <IoIosSpeedometer />
              <h3 className="text-lg">31</h3> 
              <h4 className="font-bold">MPG Highway</h4>
            </div>
  
            {/* Annual Fuel Cost */}
            <div className="mt-2">
              <MdOutlineAttachMoney />
              <h3 className="text-lg">$1,900</h3>
              <h4 className="font-bold">Annual Fuel Cost</h4> 
            </div>
  
            {/* GHG Rating */}
            <div className="mt-2">
              <FaGlobeAmericas />
              <h3 className="text-lg">5</h3>
              <h4 className="font-bold">GHG Rating</h4> 
            </div>

            {/*AI Analysis*/}
            <div className="mt-2">
              <h3>Interpretation
Fuel Efficiency: The car has solid highway efficiency but performs moderately in city conditions. Its combined 25 MPG is competitive for its class, particularly if it's a midsize sedan or crossover.
Costs: A $1,900 annual fuel cost is reasonable, but actual costs will vary based on fuel prices and driving habits.
Environmental Consideration: A GHG rating of 5 suggests the car is neither exceptionally eco-friendly nor particularly high-emission—it performs averagely compared to peers.</h3>
            </div>
          </>
        ),
        '2023': 'Toyota Avalon 2021, Item 2 description.',
      },
      AvalonHybrid: {
        '2021': 'Toyota Avalon 2022, Item 1 description.',
        '2023': 'Toyota Avalon 2022, Item 2 description.',
      },
      // Add other years here...
    },
    Nissan: {
      Sentra: {
        '2023': (
          <>
            <h2 className="text-3xl font-extrabold">Nissan Sentra 2023</h2>
            
            {/* Image of the car */}
            <img
              src= {Sentra} 
              alt="Nissan Sentra 2023"
              className="w-64 h-40 object-cover my-4"
              height={200}
            />
  
            {/* MPG Combination */}
            <div className="mt-2">
              <FaGasPump />
              <h3 className="text-lg">33</h3>
              <h4 className="font-bold">MPG Combination</h4> 
            </div>
  
            {/* MPG City */}
            <div className="mt-2">
              <FaCity/>
              <h3 className="text-lg">29</h3>
              <h4 className="font-bold">MPG City</h4> 
            </div>
  
            {/* MPG Highway */}
            <div className="mt-2">
              <IoIosSpeedometer />
              <h3 className="text-lg">39</h3>
              <h4 className="font-bold">MPG Highway</h4> 
            </div>
  
            {/* Annual Fuel Cost */}
            <div className="mt-2">
              <MdOutlineAttachMoney />
              <h3 className="text-lg">$1,450</h3>
              <h4 className="font-bold">Annual Fuel Cost</h4> 
            </div>
  
            {/* GHG Rating */}
            <div className="mt-2">
              <FaGlobeAmericas />
              <h3 className="text-lg">6</h3>
              <h4 className="font-bold">GHG Rating</h4>
            </div>
            {/*AI Analysis*/}
            <div className="mt-2">
              <h3>Interpretation
Fuel Efficiency: This car is highly fuel-efficient, with a combined 33 MPG that sets it apart in its class. Its city MPG (29) is strong for urban commuters, and the highway MPG (39) is excellent for long-distance travel.
Costs: With a $1,450 annual fuel cost, this vehicle provides significant savings compared to less efficient cars.
Environmental Consideration: A GHG rating of 6 indicates the car is more environmentally friendly than average, making it a good choice for eco-conscious drivers.</h3>
            </div>
          </>
        ),
      },
      2022: {
        
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
        <option value="empty" disabled>Select a car company</option>
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
          <option value="empty" disabled>Select a car model</option>
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
          <option value="empty" disabled>Select a year</option>
          {data[selectedCompany][selectedModel].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      {/* Display Content: Show description based on the selected values */}
      {selectedCompany !== 'empty' && selectedModel !== 'empty' && selectedYear !== 'empty' && (
        <div className="mt-4 p-4 border rounded bg-gray-100 display_flex">
          {/*<h2 className="text-xl">Selected Item: {selectedYear}</h2>*/}
          <p>{itemDetails[selectedCompany][selectedModel][selectedYear]}</p>
        </div>
      )}
    </div>
  );
}

export default DropdownSelector;

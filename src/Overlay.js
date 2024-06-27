import './Overlay.css'; // Importing CSS for styling
import { useState } from 'react'; // Importing useState hook
import { intData } from './overlaydata'; // Importing data from overlaydata file

function Overlay({obj}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]); // State to track selected indexes, initialized to an empty array
  // Function to handle click events on grid items
  const handleClick = (index) => {
    // Toggle selection of the clicked item
    if (selectedIndexes.includes(index)) {
      // Item is already selected, remove it from selectedIndexes
      setSelectedIndexes(selectedIndexes.filter((idx) => idx !== index));
    } else {
      // Item is not selected, add it to selectedIndexes
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  // Rendering the component
  return (
    <div className="grid-container">
      {obj.map((item, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className={`grid-item ${selectedIndexes.includes(index) ? (item.isValid ? 'valid' : 'invalid') : ''}`}
        >
          {item.value !== null ? item.value.toString() : 'null'} {/* Displaying the value of each item */}
        </div>
      ))}
    </div>
  );
}

export default Overlay;
 
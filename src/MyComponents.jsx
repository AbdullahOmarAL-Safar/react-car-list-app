import React, {useState} from 'react';
import './index.css'

function MyComponents() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars(prev => [...prev, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  function handleRemoveCar(index) {
    setCars(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="car-container">
      <h2 className="title">🚗 List of Cars</h2>
      <ul className="car-list">
        {cars.map((car, index) => (
          <li key={index} className="car-item" onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model} <span className="remove-hint">(click to remove)</span>
          </li>
        ))}
      </ul>

      <div className="form">
        <input
          type="number"
          value={carYear}
          onChange={e => setCarYear(e.target.value)}
          className="input"
          placeholder="Year"
        />
        <input
          type="text"
          value={carMake}
          onChange={e => setCarMake(e.target.value)}
          className="input"
          placeholder="Make"
        />
        <input
          type="text"
          value={carModel}
          onChange={e => setCarModel(e.target.value)}
          className="input"
          placeholder="Model"
        />
        <button className="add-button" onClick={handleAddCar}>
          ➕ Add Car
        </button>
      </div>
    </div>
  );
}


export default MyComponents;

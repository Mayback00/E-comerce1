import React, { useState } from 'react';

const ProductFilter = () => {
  const [selectedOption, setSelectedOption] = useState('Selecciona un formato');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Aquí puedes realizar acciones adicionales según la opción seleccionada
  };

  return (
    <div>
      <h3>Tueste</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="Selecciona un formato" disabled>
          Selecciona un formato
        </option>
        <option value="Granos">Granos</option>
        <option value="Molido">Molido</option>
        <option value="Cápsulas">Cápsulas</option>
      </select>
    </div>
  );
};

export default ProductFilter;

import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    material: 'aluminium',
    process_type: 'primary',
    energy: 'grid',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Material:</label>
      <select name="material" onChange={handleChange}>
        <option value="aluminium">Aluminium</option>
        <option value="copper">Copper</option>
      </select>

      <label>Processing Type:</label>
      <select name="process_type" onChange={handleChange}>
        <option value="primary">Primary (Raw)</option>
        <option value="recycled">Recycled</option>
      </select>

      <label>Energy Source:</label>
      <select name="energy" onChange={handleChange}>
        <option value="grid">Grid Mix</option>
        <option value="renewable">Renewable</option>
      </select>

      <label>Quantity (kg):</label>
      <input type="number" name="quantity" onChange={handleChange} />

      <button type="submit">Run LCA</button>
    </form>
  );
}

export default Form;

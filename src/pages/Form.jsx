import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Button } from '@mui/material';
const formConfig = require('../forms/demo.json');

function DynamicForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: event.target.type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here (using the validation rules from JSON)
    // If valid, submit the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formConfig.title}</h2>
      {formConfig.inputs.map((input) => {
        switch (input.type) {
          case 'text':
            return (
              <TextField
                key={input.name}
                label={input.label}
                name={input.name}
                value={formData[input.name] || ''}
                onChange={handleChange}
                fullWidth
                error={!!errors[input.name]}
                helperText={errors[input.name]}
              />
            );
          case 'select':
            return (
              <FormControl fullWidth key={input.name}>
                <InputLabel>{input.label}</InputLabel>
                <Select
                  name={input.name}
                  value={formData[input.name] || ''}
                  onChange={handleChange}
                  error={!!errors[input.name]}
                >
                  {input.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          case 'checkbox':
            return (
              <FormControlLabel
                key={input.name}
                control={
                  <Checkbox
                    name={input.name}
                    checked={formData[input.name] || false}
                    onChange={handleChange}
                  />
                }
                label={input.label}
              />
            );
          default:
            return null;
        }
      })}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default DynamicForm;

import { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  RadioGroup,
  Radio,
} from "@mui/material";
import demoForm from "../forms/demo.json";

const inputStyles = {
  width: "400px",
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
  },
  "& .MuiInputBase-input": {
    backgroundColor: "white",
  },
};

const formContainerStyles = {
  p: 3,
  maxWidth: "1500px",
};

const fieldsContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 2,
  alignItems: "flex-start",
};

function DynamicForm() {
  const [formData, setFormData] = useState({});
  const [errors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: event.target.type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here (using the validation rules from JSON)
    // If valid, submit the form data
    console.log(formData);
  };

  return (
    <Box sx={formContainerStyles}>
      <form onSubmit={handleSubmit}>
        <h2>{demoForm.title}</h2>
        <Box sx={fieldsContainerStyles}>
          {demoForm.inputs.map((input) => {
            switch (input.type) {
              case "text":
                return (
                  <TextField
                    key={input.name}
                    label={input.label}
                    name={input.name}
                    value={formData[input.name] || ""}
                    onChange={handleChange}
                    error={!!errors[input.name]}
                    helperText={errors[input.name]}
                    sx={{ ...inputStyles, ...input.sx }}
                  />
                );
              case "select":
                return (
                  <FormControl key={input.name} sx={inputStyles}>
                    <InputLabel>{input.label}</InputLabel>
                    <Select
                      name={input.name}
                      value={formData[input.name] || ""}
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
              case "checkbox":
                return (
                  <FormControlLabel
                    sx={input.sx}
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
              case "label":
                return (
                  <Box key={input.name} sx={input.sx}>
                    {input.text}
                  </Box>
                );
              case "radio":
                return (
                  <FormControl key={input.name}>
                    <RadioGroup row name="row-radio-buttons-group">
                      {input.options.map((option) => (
                        <FormControlLabel
                          key={option}
                          control={
                            <Radio
                              name={input.name}
                              value={option}
                              checked={formData[input.name] === option}
                              onChange={handleChange}
                            />
                          }
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                );
              case "break": {
                return <Box key={input.name} sx={{ width: "100%" }}></Box>;
              }
              default:
                return null;
            }
          })}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default DynamicForm;

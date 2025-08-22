function convertTemp() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("unit").value;
  const toUnit = document.getElementById("convertTo").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "Please enter a valid number.";
    return;
  }

  if (fromUnit === toUnit) {
    result.innerHTML = `Converted temperature: ${temp.toFixed(2)} °${toUnit.charAt(0).toUpperCase()}`;
    return;
  }

  let celsius;
  if (fromUnit === "celsius") {
    celsius = temp;
  } else if (fromUnit === "fahrenheit") {
    celsius = (temp - 32) * 5 / 9;
  } else if (fromUnit === "kelvin") {
    celsius = temp - 273.15;
  }
  let finalTemp;

  if (toUnit === "celsius") {
    finalTemp = celsius;
  } else if (toUnit === "fahrenheit") {
    finalTemp = (celsius * 9 / 5) + 32;
  } else if (toUnit === "kelvin") {
    finalTemp = celsius + 273.15;
  }

  result.innerHTML = `Converted temperature: ${finalTemp.toFixed(2)} °${toUnit.charAt(0).toUpperCase()}`;
}

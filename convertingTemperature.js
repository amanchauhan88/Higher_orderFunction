
const temperatureCelsius = 25;

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureFahrenheit);

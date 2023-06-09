import format from 'date-fns/format';

// Adjusting retrieved data according to apps need.
const WeatherParser = (weather) => {
  const { name, country, localtime } = weather.location;
  const {
    last_updated,
    temp_c,
    temp_f,
    is_day,
    condition: { text: condition },
    wind_mph,
    wind_kph,
    wind_dir,
    humidity,
    feelslike_c,
    feelslike_f,
    vis_km,
    vis_miles,
  } = weather.current;

  const hour = localtime.slice(-5);
  const date = localtime.slice(0, 10);
  const dateFormatted = format(new Date(date), 'dd/MMM/yy');
  const lastUpdated = last_updated.slice(-5);

  return {
    name,
    country,
    lastUpdated,
    temp_c,
    temp_f,
    is_day,
    condition,
    wind_mph,
    wind_kph,
    wind_dir,
    humidity,
    feelslike_c,
    feelslike_f,
    vis_km,
    vis_miles,
    hour,
    dateFormatted,
  };
};

// Getting weather from weather api
export default async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6cad553ab03344ef8ad120819230406&q=${location.toLowerCase()}`,
      {
        mode: 'cors',
      },
    );
    const weather = await response.json();

    return WeatherParser(weather);
  } catch {
    alert('Server is busy, please try again later');
  }
}

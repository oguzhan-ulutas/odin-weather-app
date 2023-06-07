// Adjusting retrieved data according to apps need.
const WeatherParser = (weather) => {
  const { name, country, localtime } = weather.location;
  const {
    last_updated,
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
  } = weather.current;

  return {
    name,
    country,
    localtime,
    last_updated,
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
  };
};

// Getting weather from weather api
export default async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=6cad553ab03344ef8ad120819230406&q=${location.toLowerCase()}`,
    {
      mode: 'cors',
    },
  );
  const weather = await response.json();
  return WeatherParser(weather);
}
const example = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1685974721,
    localtime: '2023-06-05 15:18',
  },
  current: {
    last_updated_epoch: 1685974500,
    last_updated: '2023-06-05 15:15',
    temp_c: 17.0,
    temp_f: 62.6,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003,
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 40,
    wind_dir: 'NE',
    pressure_mb: 1024.0,
    pressure_in: 30.24,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 55,
    cloud: 50,
    feelslike_c: 17.0,
    feelslike_f: 62.6,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 6.0,
    gust_mph: 12.1,
    gust_kph: 19.4,
  },
};

// QYhA7p4xz5lMx341gvMjtO6W88aOrQhY
// xevDxA5DrqpWPmxG3UWazN5As6P6poAw
// oiU57u0vmT2469QR88to5Hgl18vpRAvt


const KEY = 'oiU57u0vmT2469QR88to5Hgl18vpRAvt';
const BASE_URL = 'http://dataservice.accuweather.com'

export const fetchGeoLocation = async (Latitude: number ,Longitude: number) => {
  if (Latitude && Longitude) {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${KEY}&q=${Latitude}%2C${Longitude}&details=true&toplevel=true`)
    const data = await res.json()
    console.log(data)
    return data
  }
  throw new Error('no geolocation');
}

export const fetchCity = async (inputValue: string) => {
  if (inputValue) {
    const res = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${KEY}&q=${inputValue}`);
    const data = await res.json();
    return data;
  }
  throw new Error('no inputValue');
};

export const fetchWeather = async (cityKey : string) => {
  const res = await fetch(`${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${KEY}`);
  const data = await res.json();
  return data;
};

export const fetchForecast = async (cityKey: string) => {
  const res = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${KEY}&metric=true`);
  const data = await res.json();
  return data;
};

export const fetchHourlyForecast = async (cityKey: string) => {
  const res = await fetch(`${BASE_URL}/forecasts/v1/hourly/12hour/${cityKey}?apikey=${KEY}&metric=true`);
  const data = await res.json();
  return data;
};

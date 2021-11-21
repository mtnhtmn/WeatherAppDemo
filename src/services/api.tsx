const KEY = 'QYhA7p4xz5lMx341gvMjtO6W88aOrQhY';

export const fetchCity = async (inputValue: string) => {
  if (inputValue) {
    const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${KEY}&q=${inputValue}`);
    const data = await res.json();
    return data;
  }
  throw new Error('no inputValue');
};

export const fetchWeather = async (cityKey : string) => {
  const res = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${KEY}`);
  const data = await res.json();
  return data;
};

export const fetchForecast = async (cityKey: string) => {
  const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${KEY}&metric=true`);
  const data = await res.json();
  return data;
};

export const fetchHourlyForecast = async (cityKey: string) => {
  const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${KEY}&metric=true`);
  const data = await res.json();
  return data;
};

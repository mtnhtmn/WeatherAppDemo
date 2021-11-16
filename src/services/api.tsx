import {log} from "util";

export const fetchCity = async (inputValue: string) => {
    if (inputValue) {
        const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY&q=${inputValue}`);
        const data = await res.json()
        return data
    }
    throw new Error('no inputValue');
};

export const fetchWeather = async (cityKey : string) => {
    const res = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY`)
    const data = await res.json()
    return data
}
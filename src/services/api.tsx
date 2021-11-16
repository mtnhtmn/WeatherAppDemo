import {log} from "util";

export const fetchCity = async (inputValue: string) => {
    if (inputValue) {
        const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY&q=${inputValue}`);
        return res.json();
    }
    throw new Error('no inputValue');
};

export const fetchWeather = async (city: {Key : string}) => {
    const res = await fetch (`https://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY`)
    console.log(city.Key)
    console.log(JSON.stringify(res))
    return res.json()
}
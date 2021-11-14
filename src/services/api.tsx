export const fetchCity = async (inputValue: string) => {
    if (inputValue) {
        const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=${inputValue}`);
        return res.json();
    }
    throw new Error('no inputValue');
};
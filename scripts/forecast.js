//API key
const key = 'lHoyEPxK0S0dsjlP1u8khF6ZsVKoh0QF';

//get weather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
}

//get city info
const getCity = async (city) => {
    //base url
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    //fetch returns a promise either resovled or rejected
    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

}



getCity('Tampa')
    .then(data => {
        return getWeather(data.Key);
    })
    // .then(data => {
    //     console.log(data);
    // })
    .catch(err => console.log(err));
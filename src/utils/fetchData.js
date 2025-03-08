export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-Rapidapi-host': 'exercisedb.p.rapidapi.com' ,
        'X-Rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    }
};
export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
}
// Get the data from the API
// Will use asynchronous call

export const FetchAPI = async (url) => {
    const data = await fetch(url);
    return data;
}
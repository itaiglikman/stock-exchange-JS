const base = 'https://financialmodelingprep.com/api/v3/';

function searchPath(query, limit, key) {
    return base + `search?query=${query}&limit=${limit}&exchange=NASDAQ&apikey=${key}`;
}

function singleProfilePath(query, key) {
    return base + `profile/${query}?apikey=${key}`;
}

function multiProfilePath(query, key) {
    return base + `profile/${query}?apikey=${key}`;
}

export default {
    searchPath,
    singleProfilePath,
    multiProfilePath,
}
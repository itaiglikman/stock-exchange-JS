const base = 'https://financialmodelingprep.com/api/v3/';

// https://financialmodelingprep.com/api/v3/search?query=ALL&limit=10&exchange=NASDAQ&apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
function searchPath(symbol, limit, key) {
    return base + `search?query=${symbol}&limit=${limit}&exchange=NASDAQ&apikey=${key}`;
}

// https://financialmodelingprep.com/api/v3/profile/ALL?apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
function singleProfilePath(symbol, key) {
    return base + `profile/${symbol}?apikey=${key}`;
}

// https://financialmodelingprep.com/api/v3/profile/ALL?apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
function multiProfilePath(symbols, key) {
    return base + `profile/${symbols}?apikey=${key}`;
}

// https://financialmodelingprep.com/api/v3/historical-price-full/ALL?apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
function profileHistoryPath(symbol, key) {
    return base + `historical-price-full/${symbol}?serietype=line&apikey=${key}`;
}

// https://financialmodelingprep.com/api/v3/quote/AAPL,MSFT,GOOG?apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
function quotesPath(symbols, key) {
    return base + `quote/${symbols}?apikey=${key}`;
}

function getOnlyMarqueeNecessary(quotes) {
    console.log(quotes);
    const marqueeInfo = quotes.map(q => {
        return { symbol: q.symbol, price: q.price, changes: q.changes }
    })
    return marqueeInfo;
}

// create a partial history array with 10 days
function get10PeriodsOfStockHistory(fullHistory) {
    if (fullHistory.length <= 10) return fullHistory.reverse();
    const numOfIntervals = Math.floor(fullHistory.length / 10);
    const historyPeriods = [];
    for (let i = 0; i < fullHistory.length; i += numOfIntervals) {
        historyPeriods.push(fullHistory[i]);
    }
    const reversedHistory = historyPeriods.reverse();
    return reversedHistory;
}

export default {
    searchPath,
    singleProfilePath,
    multiProfilePath,
    profileHistoryPath,
    quotesPath,
    getOnlyMarqueeNecessary,
    get10PeriodsOfStockHistory
}
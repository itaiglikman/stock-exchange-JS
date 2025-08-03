export default async function displayMarquee(marqueeElement, state) {

    const symbols = [
        'NVDA', 'NVO', 'UNH', 'AMD', 'SOFI', 'REPL', 'TSLA', 'META', 'MSFT', 'AMBQ', 'AMZN', 'GOOG', 'GOOGL', 'HON', 'ASML', 'WM', 'AXP', 'CRM'
    ];

    const container = $('<div>').addClass('marquee');
    let marqueeInfo = [];
    // marqueeInfo = await state.getQuotesForMarquee(symbols);
    if (!marqueeInfo.length) marqueeInfo = marqueeInfoMock;
    marqueeInfo.forEach(item => {
        const changeColor = item.changes > 0 ? 'green' : 'red';
        const symbol = $('<span>').text(item.symbol);
        const price = $('<span>').text(item.price).addClass(changeColor);
        const infoItem = $('<span>').addClass('marquee-info');
        infoItem.append(symbol, price);
        container.append(infoItem);
    });

    marqueeElement.append(container);
}

const marqueeInfoMock = [
    {
        "symbol": "NVDA",
        "price": 173.72,
        "changes": -4.15
    }, {
        "symbol": "UNH",
        "price": 237.77,
        "changes": -11.79
    },
    {
        "symbol": "AMD",
        "price": 171.7,
        "changes": -4.61
    },
    {
        "symbol": "TSLA",
        "price": 302.63,
        "changes": -5.64
    },
    {
        "symbol": "META",
        "price": 750.01,
        "changes": -23.43
    },
    {
        "symbol": "MSFT",
        "price": 524.11,
        "changes": -9.39
    },
    {
        "symbol": "AMBQ",
        "price": 39.51,
        "changes": -4.34
    },
    {
        "symbol": "AMZN",
        "price": 214.75,
        "changes": -19.36
    },
    {
        "symbol": "GOOG",
        "price": 189.95,
        "changes": -2.91
    },
    {
        "symbol": "GOOGL",
        "price": 189.13,
        "changes": -2.77
    },
    {
        "symbol": "HON",
        "price": 217.71,
        "changes": -4.64
    },
    {
        "symbol": "ASML",
        "price": 689.82,
        "changes": -4.89
    },
    {
        "symbol": "AXP",
        "price": 294.27,
        "changes": -5.04
    },
    {
        "symbol": "CRM",
        "price": 250.74,
        "changes": -7.59
    },
    {
        "symbol": "NVO",
        "price": 48.19,
        "changes": 1.12
    },
    {
        "symbol": "REPL",
        "price": 7.6,
        "changes": 0.57
    },
    {
        "symbol": "SOFI",
        "price": 21.23,
        "changes": -1.35
    },
    {
        "symbol": "WM",
        "price": 228.88,
        "changes": -0.28
    }
];

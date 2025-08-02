// import axios from 'axios';
import apiHandlers from '../Utils/apiHandlers.js';
class APIManager {
    constructor(apiKey) {
        this.key = apiKey;
    }

    /**
     * @param {*} query 
     * @param {*} limit 
     * @returns array of stocks symbols
     */
    async searchStocks(query, limit = 10) {
        const result = await axios(apiHandlers.searchPath(query, limit, this.key));
        const search = result.data;
        // const search = searchMock; //
        const symbolsArr = search.map(item => item.symbol);
        return symbolsArr;
    }

    /**
     * @param {*} symbols 
     * @returns array of stocks profiles
     */
    async getMultiStocks(symbols) {
        const joinedSymbols = symbols.join(',');
        const result = await axios(apiHandlers.multiProfilePath(joinedSymbols, this.key));
        const profiles = result.data;
        // const profiles = multiProfileMock;
        return profiles;
    }

    /**
     * @param {*} symbol
     * @returns single stock profile object
     */
    async getSingleStock(symbol) {
        // const result = await axios(apiHandlers.singleProfilePath(symbol, this.key));
        // const profile = result.data;
        const profile = singleProfileMock[0];
        return profile;
    }
}

export default APIManager;

const searchMock =
    [
        {
            "symbol": "AA",
            "name": "Alcoa Corporation",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAU",
            "name": "Almaden Minerals Ltd.",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange Arca",
            "exchangeShortName": "AMEX"
        },
        {
            "symbol": "AAT",
            "name": "American Assets Trust, Inc.",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAP",
            "name": "Advance Auto Parts, Inc.",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAN",
            "name": "The Aaron's Company, Inc.",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAM",
            "name": "AA Mission Acquisition Corp.",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAL",
            "name": "American Airlines Group Inc.",
            "currency": "USD",
            "stockExchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ"
        },
        {
            "symbol": "AAC",
            "name": "Ares Acquisition Corporation",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "AAA",
            "name": "AXS First Priority CLO Bond ETF",
            "currency": "USD",
            "stockExchange": "New York Stock Exchange Arca",
            "exchangeShortName": "AMEX"
        },
        {
            "symbol": "AAXT",
            "name": "Aamaxan Transport Group, Inc.",
            "currency": "USD",
            "stockExchange": "Other OTC",
            "exchangeShortName": "OTC"
        }
    ]


const singleProfileMock =
    [
        {
            "symbol": "AAPL",
            "price": 209.05,
            "beta": 1.199,
            "volAvg": 53123538,
            "mktCap": 3122328990000,
            "lastDiv": 1.01,
            "range": "169.21-260.1",
            "changes": -2.22,
            "companyName": "Apple Inc.",
            "currency": "USD",
            "cik": "0000320193",
            "isin": "US0378331005",
            "cusip": "037833100",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Consumer Electronics",
            "website": "https://www.apple.com",
            "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts, as well as advertising services include third-party licensing arrangements and its own advertising platforms. In addition, the company offers various subscription-based services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1976 and is headquartered in Cupertino, California.",
            "ceo": "Timothy D. Cook",
            "sector": "Technology",
            "country": "US",
            "fullTimeEmployees": "164000",
            "phone": "(408) 996-1010",
            "address": "One Apple Park Way",
            "city": "Cupertino",
            "state": "CA",
            "zip": "95014",
            "dcfDiff": 44.70958,
            "dcf": 164.34041689667916,
            "image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
            "ipoDate": "1980-12-12",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        }
    ];

const multiProfileMock =
    [
        {
            "symbol": "AAON",
            "price": 80.74,
            "beta": 0.946,
            "volAvg": 1010169,
            "mktCap": 6569498914,
            "lastDiv": 0.36,
            "range": "68.98-144.07",
            "changes": -0.47,
            "companyName": "AAON, Inc.",
            "currency": "USD",
            "cik": "0000824142",
            "isin": "US0003602069",
            "cusip": "000360206",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Construction",
            "website": "https://www.aaon.com",
            "description": "AAON, Inc., together with its subsidiaries, engages in engineering, manufacturing, marketing, and selling air conditioning and heating equipment in the United States and Canada. The company operates through three segments: AAON Oklahoma, AAON Coil Products, and BasX. It offers rooftop units, data center cooling solutions, cleanroom systems, chillers, packaged outdoor mechanical rooms, air handling units, makeup air units, energy recovery units, condensing units, geothermal/water-source heat pumps, coils, and controls. The company markets and sells its products to retail, manufacturing, educational, lodging, supermarket, data centers, medical and pharmaceutical, and other commercial industries. It sells its products through a network of independent manufacturer representative organizations and internal sales force. The company was incorporated in 1987 and is based in Tulsa, Oklahoma.",
            "ceo": "Matthew J. Tobolski SE",
            "sector": "Industrials",
            "country": "US",
            "fullTimeEmployees": "4812",
            "phone": "918 583 2266",
            "address": "2425 South Yukon Avenue",
            "city": "Tulsa",
            "state": "OK",
            "zip": "74107",
            "dcfDiff": 51.52618,
            "dcf": 29.21382129582136,
            "image": "https://images.financialmodelingprep.com/symbol/AAON.png",
            "ipoDate": "1992-12-16",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        },
        {
            "symbol": "AAPL",
            "price": 209.05,
            "beta": 1.199,
            "volAvg": 53123538,
            "mktCap": 3122328990000,
            "lastDiv": 1.01,
            "range": "169.21-260.1",
            "changes": -2.22,
            "companyName": "Apple Inc.",
            "currency": "USD",
            "cik": "0000320193",
            "isin": "US0378331005",
            "cusip": "037833100",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Consumer Electronics",
            "website": "https://www.apple.com",
            "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts, as well as advertising services include third-party licensing arrangements and its own advertising platforms. In addition, the company offers various subscription-based services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1976 and is headquartered in Cupertino, California.",
            "ceo": "Timothy D. Cook",
            "sector": "Technology",
            "country": "US",
            "fullTimeEmployees": "164000",
            "phone": "(408) 996-1010",
            "address": "One Apple Park Way",
            "city": "Cupertino",
            "state": "CA",
            "zip": "95014",
            "dcfDiff": 44.70958,
            "dcf": 164.34041689667916,
            "image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
            "ipoDate": "1980-12-12",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        },
        {
            "symbol": "MSFT",
            "price": 513.24,
            "beta": 1.033,
            "volAvg": 19726024,
            "mktCap": 3814676829600,
            "lastDiv": 3.24,
            "range": "344.79-518.29",
            "changes": 0.67,
            "companyName": "Microsoft Corporation",
            "currency": "USD",
            "cik": "0000789019",
            "isin": "US5949181045",
            "cusip": "594918104",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Software - Infrastructure",
            "website": "https://www.microsoft.com",
            "description": "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. The company operates in three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing. The Productivity and Business Processes segment offers Office, Exchange, SharePoint, Microsoft Teams, Office 365 Security and Compliance, Microsoft Viva, and Skype for Business; Skype, Outlook.com, OneDrive, and LinkedIn; and Dynamics 365, a set of cloud-based and on-premises business solutions for organizations and enterprise divisions. The Intelligent Cloud segment licenses SQL, Windows Servers, Visual Studio, System Center, and related Client Access Licenses; GitHub that provides a collaboration platform and code hosting service for developers; Nuance provides healthcare and enterprise AI solutions; and Azure, a cloud platform. It also offers enterprise support, Microsoft consulting, and nuance professional services to assist customers in developing, deploying, and managing Microsoft server and desktop solutions; and training and certification on Microsoft products. The More Personal Computing segment provides Windows original equipment manufacturer (OEM) licensing and other non-volume licensing of the Windows operating system; Windows Commercial, such as volume licensing of the Windows operating system, Windows cloud services, and other Windows commercial offerings; patent licensing; and Windows Internet of Things. It also offers Surface, PC accessories, PCs, tablets, gaming and entertainment consoles, and other devices; Gaming, including Xbox hardware, and Xbox content and services; video games and third-party video game royalties; and Search, including Bing and Microsoft advertising. The company sells its products through OEMs, distributors, and resellers; and directly through digital marketplaces, online stores, and retail stores. Microsoft Corporation was founded in 1975 and is headquartered in Redmond, Washington.",
            "ceo": "Satya Nadella",
            "sector": "Technology",
            "country": "US",
            "fullTimeEmployees": "228000",
            "phone": "425 882 8080",
            "address": "One Microsoft Way",
            "city": "Redmond",
            "state": "WA",
            "zip": "98052-6399",
            "dcfDiff": 169.05824,
            "dcf": 344.1817600080555,
            "image": "https://images.financialmodelingprep.com/symbol/MSFT.png",
            "ipoDate": "1986-03-13",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        },
        {
            "symbol": "GOOG",
            "price": 197.44,
            "beta": 1.005,
            "volAvg": 28118953,
            "mktCap": 2382168185052,
            "lastDiv": 0.81,
            "range": "142.66-208.7",
            "changes": 1.01,
            "companyName": "Alphabet Inc.",
            "currency": "USD",
            "cik": "0001652044",
            "isin": "US02079K1079",
            "cusip": "02079K107",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Internet Content & Information",
            "website": "https://abc.xyz",
            "description": "Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, including ads, Android, Chrome, devices, Gmail, Google Drive, Google Maps, Google Photos, Google Play, Search, and YouTube. It is also involved in the sale of apps and in-app purchases and digital content in the Google Play and YouTube; and devices, as well as in the provision of YouTube consumer subscription services. The Google Cloud segment offers infrastructure, cybersecurity, databases, analytics, AI, and other services; Google Workspace that include cloud-based communication and collaboration tools for enterprises, such as Gmail, Docs, Drive, Calendar, and Meet; and other services for enterprise customers. The Other Bets segment sells healthcare-related and internet services. The company was incorporated in 1998 and is headquartered in Mountain View, California.",
            "ceo": "Sundar Pichai",
            "sector": "Communication Services",
            "country": "US",
            "fullTimeEmployees": "185719",
            "phone": "650 253 0000",
            "address": "1600 Amphitheatre Parkway",
            "city": "Mountain View",
            "state": "CA",
            "zip": "94043",
            "dcfDiff": -65.47829,
            "dcf": 262.0082886161016,
            "image": "https://images.financialmodelingprep.com/symbol/GOOG.png",
            "ipoDate": "2004-08-19",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        }
    ]
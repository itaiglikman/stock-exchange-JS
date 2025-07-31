import APIManager from "./Models/APIManger.js";
import { ENV } from "../env.js";
import Company from "./Models/Company.js";

let state = new APIManager(ENV.API_KEY);

async function search() {
    // let profiles = await state.searchStocks('AA');
    const profiles = await state.getSingleStock('AA');
    // const profiles = await state.getMultiStocks('AA');
    // console.log(profiles);
    const company = new Company(profiles);
    console.log(company);
}

const symbols = [
    'AAL', 'AAXJ',
    'AAWW', 'AAVM',
    'AARD', 'AAPU',
    'AAPL', 'AAPG',
    'AAPD', 'AAPB'
]

search();

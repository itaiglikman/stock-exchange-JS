import APIManager from "./Models/APIManger.js";
import { ENV } from "../env.js";
import Company from "./Models/Company.js";
import SearchService from "./View/search.js";
import Marquee from './View/marquee.js';

let state = new APIManager(ENV.API_KEY);


async function main() {
    await Marquee($('#marquee'), state);

}


$('#searchBtn').on('click', async () => {
    await SearchService.handleSearchBtnClick(state);
})


// const symbols = [
//     'AAL', 'AAXJ',
//     'AAWW', 'AAVM',
//     'AARD', 'AAPU',
//     'AAPL', 'AAPG',
//     'AAPD', 'AAPB'
// ]

main();
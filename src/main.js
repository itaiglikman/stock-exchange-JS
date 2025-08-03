import { ENV } from "../env.js";
import APIManager from "./Models/APIManger.js";
import Marquee from './View/marquee.js';
import Search from "./View/search.js";

let state = new APIManager(ENV.API_KEY);

async function main() {
    await Marquee($('#marquee'), state);
    await Search($('#searchSection'), state);
}

main();
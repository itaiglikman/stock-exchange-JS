import { ENV } from "../../env.js";
import APIManager from "../Models/APIManger.js";
import Company from "../Models/Company.js";
import {createCompanyPage} from "../Utils/companyPageUtils.js";

// http://127.0.0.1:5500/src/View/company.html?symbol=AAL

const state = new APIManager(ENV.API_KEY);

async function handlePageLoad() {

    const spinner = new Spinner().spin();
    const spinnerElement = $('<div>');

    // const params = new URLSearchParams(window.location.search);
    // const symbol = params.get('symbol');

    const $main = $('main.container');
    $main.empty()
        .append(  // display spinner on load
            spinnerElement.show().empty().append(spinner.el).addClass('.spinner')
        );

    const profile = new Company(await state.getSingleStock(symbol));
    const history = await state.getStockHistory(symbol);

    $(spinnerElement).hide().empty(); // omit spinner when results are back
    $main.empty();

    createCompanyPage($main, profile, history)
}

handlePageLoad();



import { ENV } from "../../env.js";
import APIManager from "../Models/APIManger.js";
import Company from "../Models/Company.js";
import companyPageUtils from "../Utils/companyPageUtils.js";

const spinner = new Spinner().spin();
const spinnerElement = $('<div>');

const params = new URLSearchParams(window.location.search);
const symbol = params.get('symbol');

const state = new APIManager(ENV.API_KEY);

async function handlePageLoad() {
    $('main').append(  // display spinner on load
        spinnerElement.show().empty().append(spinner.el).addClass('.spinner')
    );
    // const profile = new Company(await state.getSingleStock(symbol));
    // const history = await state.getStockHistory(symbol);
    $(spinnerElement).hide().empty(); // omit spinner when results are back

    companyPageUtils.handleCompanyData(profile);
    companyPageUtils.handleChart(history, symbol);
}

handlePageLoad(symbol)



const spinner = new Spinner().spin();
const spinnerElement = $('<div>');
const searchResultsUl = $('#searchResults');

function displaySearchUl(profiles) {
    for (const profile of profiles) {
        const li = $('<li>');
        li.append($('<span>').addClass('symbol').text(profile.symbol));
        li.append($('<span>').addClass('company-name').text(profile.companyName));
        li.append($('<span>').addClass('exchange').text(profile.exchangeShortName || ''));
        li.on('click', () => window.location.href = `View/company.html?symbol=${profile.symbol}`); // link to the company page with the symbol param
        searchResultsUl.append(li);
    }
}

async function handleSearchBtnClick(state) {
    searchResultsUl // display spinner on load
        .empty()
        .append(
            spinnerElement.show().empty().append(spinner.el)
        );
    const query = $('#searchInput').val();
    let symbols = await state.searchStocks(query);
    let profiles = await state.getMultiStocks(symbols);
    $(spinnerElement).hide().empty(); // omit spinner when results are back
    displaySearchUl(profiles);
}

export default {
    handleSearchBtnClick
}
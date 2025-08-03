import searchUtils from '../Utils/searchUtils.js';

export default async function Search(container, state) {

    const spinner = new Spinner().spin();
    const spinnerElement = $('<div>');
    const searchResultsUl = $('<ul>')
        .attr('id', '#searchResults')
        .addClass('search-results');

    function displaySearchArea() {

        searchUtils.createSearchForm(container, searchResultsUl);

        $(container).on('click', '#searchBtn', async () => {
            await handleSearchClick();
        });
    }

    async function handleSearchClick() {
        searchResultsUl // display spinner on load
            .empty()
            .append(spinnerElement.show().empty().append(spinner.el));
        const query = $(searchInput).val();
        const symbols = await state.searchStocks(query);
        const profiles = await state.getMultiStocks(symbols);
        $(spinnerElement).hide().empty(); // omit spinner when results are back
        searchUtils.displaySearchUl(profiles, searchResultsUl);
    }

    displaySearchArea();
}
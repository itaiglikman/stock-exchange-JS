function createSearchForm(container, searchResultsUl) {
    const topSearch = $('<div>').addClass('top-search');
    const searchInput = $('<input>')
        .attr('type', 'text')
        .attr('id', 'searchInput')
        .addClass('search-input')
        .attr('placeholder', 'Search for a stock...');
    const searchBtn = $('<button>')
        .attr('id', 'searchBtn')
        .addClass('search-btn')
        .text('Search');
    topSearch.append(searchInput, searchBtn);

    // Append the topSearch div and searchResultsUl to the container
    $(container).append(topSearch);
    $(container).append(searchResultsUl);
}

function displaySearchUl(profiles, searchResultsUl) {
    $(searchResultsUl).empty();
    for (const profile of profiles) {
        const li = createLiItem(profile);
        searchResultsUl.append(li);
    }
}

function createLiItem(profile) {
    const li = $('<li>');
    const image = $('<img>').addClass('company-logo')
        .attr('src', profile.image)
        // in case image is not available - display favicon
        .on('error', function () { $(this).attr('src', 'images/favicon.ico') });
    li.append(image);
    li.append($('<span>').addClass('symbol').text(profile.symbol));
    li.append($('<span>').addClass('company-name').text(profile.companyName));
    li.append($('<span>').addClass('company-numbers').text(profile.price));
    const changesColor = profile.changes > 0 ? 'green' : 'red';
    li.append($('<span>').addClass('company-numbers').addClass(changesColor)
        .text('(' + profile.changes + '%)'));
    li.append($('<span>').addClass('exchange').text(profile.exchangeShortName));

    // link to the company page with the symbol param
    li.on('click', () => window.location.href = `View/company.html?symbol=${profile.symbol}`);
    return li;
}

export default {
    createLiItem,
    createSearchForm,
    displaySearchUl
}
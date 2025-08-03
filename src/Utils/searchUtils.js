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

function displaySearchUl(profiles, searchResultsUl, inputValue) {
    $(searchResultsUl).empty();
    for (const profile of profiles) {
        const li = createLiItem(profile, inputValue);
        searchResultsUl.append(li);
    }
}

function createLiItem(profile, inputValue) {
    const li = $('<li>');
    const image = $('<img>').addClass('company-logo')
        .attr('src', profile.image)
        // in case image is not available - display favicon
        .on('error', function () { $(this).attr('src', 'images/favicon.ico') });
    li.append(image);
    const highlightedSymbol = highlight(profile.symbol, inputValue)
    li.append($(highlightedSymbol).addClass('symbol'));
    const highlightedCName = highlight(profile.companyName, inputValue)
    li.append($(highlightedCName).addClass('company-name'));
    li.append($('<span>').addClass('company-numbers').text(profile.price));
    const changesColor = profile.changes > 0 ? 'green' : 'red';
    li.append($('<span>').addClass('company-numbers').addClass(changesColor)
        .text('(' + profile.changes + '%)'));
    li.append(handleCompareBtn(profile));

    // link to the company page with the symbol param
    li.on('click', () => window.location.href = `View/company.html?symbol=${profile.symbol}`);
    return li;
}

/**
 * highlight the matched part of the string to the searched value
 * @param {*} str 
 * @param {*} value 
 */
function highlight(str, value) {
    if (str.toUpperCase().includes(value.toUpperCase())) {
        str = str.toUpperCase();
        value = value.toUpperCase();
        const highlighted = $('<span>').addClass('highlight').text(value);
        const restOfStr = $('<span>').text(str.split(value)[1]);
        return $('<span>').append(highlighted, restOfStr);
    }
    return $('<span>').text(str);
}

/**
 * create an element which onclick will log the profile object
 * @param {*} profile 
 * @returns element
 */
function handleCompareBtn(profile) {
    const btn = $('<span>')
        .addClass('compare')
        .text('Compare')
        .attr('compare-id', profile.symbol)
        .on('click', () => {
            event.stopPropagation(); // Prevents the li click event
            console.log(profile);
        });
    return btn;
}

export default {
    createSearchForm,
    displaySearchUl
}
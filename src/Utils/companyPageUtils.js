
function handleCompanyData(profile) {
    $('#companyLogo').attr('src', profile.image);
    $('#companyName').text(profile.companyName);
    $('#companySymbol').text(profile.symbol);
    $('#companyDescription').text(profile.description);
    $('#companyPrice').text(symbolsMap.get(profile.currency) + profile.price);
    $('#companyChange').text("(" + profile.changes + "%)").addClass(profile.changes > 0 ? 'green' : 'red');
    $('#companyCurrency').text(profile.currency);
}

function handleChart(history, symbol) {
    const labels = history.map(day => day.date);
    const prices = history.map(day => day.close);
    const chart = document.getElementById('companyChart').getContext('2d');

    new Chart(chart, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: `${symbol} Stock Price`,
                data: prices,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(49, 130, 206, 0.08)',
                pointBackgroundColor: '#3182ce',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#2563eb',
                        font: { size: 16, weight: 'bold' }
                    }
                },
                tooltip: {
                    backgroundColor: '#2563eb',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#e2e8f0',
                    borderWidth: 1
                }
            },
            layout: {
                padding: 20
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                        color: '#2563eb',
                        font: { size: 14, weight: 'bold' }
                    },
                    ticks: { color: '#2d3748' },
                    grid: { color: '#e2e8f0' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price ($)',
                        color: '#2563eb',
                        font: { size: 14, weight: 'bold' }
                    },
                    ticks: { color: '#2d3748' },
                    grid: { color: '#e2e8f0' }
                }
            }
        }
    });
}

const symbolsMap = new Map([
    ['AED', 'د.إ'], ['AFN', '؋'], ['ALL', 'L'], ['AMD', '֏'], ['ANG', 'ƒ'], ['AOA', 'Kz'],
    ['ARS', '$'], ['AUD', '$'], ['AWG', 'ƒ'], ['AZN', '₼'], ['BAM', 'KM'], ['BBD', '$'], ['BDT', '৳'],
    ['BGN', 'лв'], ['BHD', '.د.ب'], ['BIF', 'FBu'], ['BMD', '$'], ['BND', '$'],
    ['BOB', '$b'], ['BOV', 'BOV'], ['BRL', 'R$'], ['BSD', '$'], ['BTC', '₿'],
    ['BTN', 'Nu.'], ['BWP', 'P'], ['BYN', 'Br'], ['BYR', 'Br'], ['BZD', 'BZ$'], ['CAD', '$'], ['CDF', 'FC'],
    ['CHE', 'CHE'], ['CHF', 'CHF'], ['CHW', 'CHW'], ['CLF', 'CLF'], ['CLP', '$'],
    ['CNH', '¥'], ['CNY', '¥'], ['COP', '$'], ['COU', 'COU'], ['CRC', '₡'],
    ['CUC', '$'], ['CUP', '₱'], ['CVE', '$'], ['CZK', 'Kč'], ['DJF', 'Fdj'], ['DKK', 'kr'], ['DOP', 'RD$'],
    ['DZD', 'دج'], ['EEK', 'kr'], ['EGP', '£'], ['ERN', 'Nfk'], ['ETB', 'Br'],
    ['ETH', 'Ξ'], ['EUR', '€'], ['FJD', '$'], ['FKP', '£'], ['GBP', '£'],
    ['GEL', '₾'], ['GGP', '£'], ['GHC', '₵'], ['GHS', 'GH₵'], ['GIP', '£'],
    ['GMD', 'D'], ['GNF', 'FG'], ['GTQ', 'Q'], ['GYD', '$'], ['HKD', '$'],
    ['HNL', 'L'], ['HRK', 'kn'], ['HTG', 'G'], ['HUF', 'Ft'], ['IDR', 'Rp'],
    ['ILS', '₪'], ['IMP', '£'], ['INR', '₹'], ['IQD', 'ع.د'], ['IRR', '﷼'],
    ['ISK', 'kr'], ['JEP', '£'], ['JMD', 'J$'], ['JOD', 'JD'], ['JPY', '¥'],
    ['KES', 'KSh'], ['KGS', 'лв'], ['KHR', '៛'], ['KMF', 'CF'], ['KPW', '₩'],
    ['KRW', '₩'], ['KWD', 'KD'], ['KYD', '$'], ['KZT', '₸'], ['LAK', '₭'],
    ['LBP', '£'], ['LKR', '₨'], ['LRD', '$'], ['LSL', 'M'], ['LTC', 'Ł'],
    ['LTL', 'Lt'], ['LVL', 'Ls'], ['LYD', 'LD'], ['MAD', 'MAD'], ['MDL', 'lei'],
    ['MGA', 'Ar'], ['MKD', 'ден'], ['MMK', 'K'], ['MNT', '₮'], ['MOP', 'MOP$'],
    ['MRO', 'UM'], ['MRU', 'UM'], ['MUR', '₨'], ['MVR', 'Rf'], ['MWK', 'MK'],
    ['MXN', '$'], ['MXV', 'MXV'], ['MYR', 'RM'], ['MZN', 'MT'], ['NAD', '$'],
    ['NGN', '₦'], ['NIO', 'C$'], ['NOK', 'kr'], ['NPR', '₨'], ['NZD', '$'],
    ['OMR', '﷼'], ['PAB', 'B/.'], ['PEN', 'S/.'], ['PGK', 'K'], ['PHP', '₱'],
    ['PKR', '₨'], ['PLN', 'zł'], ['PYG', 'Gs'], ['QAR', '﷼'], ['RMB', '￥'],
    ['RON', 'lei'], ['RSD', 'Дин.'], ['RUB', '₽'], ['RWF', 'R₣'], ['SAR', '﷼'],
    ['SBD', '$'], ['SCR', '₨'], ['SDG', 'ج.س.'], ['SEK', 'kr'],
    ['SGD', 'S$'], ['SHP', '£'], ['SLL', 'Le'], ['SOS', 'S'], ['SRD', '$'], ['SSP', '£'],
    ['STD', 'Db'], ['STN', 'Db'], ['SVC', '$'], ['SYP', '£'], ['SZL', 'E'], ['THB', '฿'],
    ['TJS', 'SM'], ['TMT', 'T'], ['TND', 'د.ت'], ['TOP', 'T$'], ['TRL', '₤'], ['TRY', '₺'],
    ['TTD', 'TT$'], ['TVD', '$'], ['TWD', 'NT$'], ['TZS', 'TSh'], ['UAH', '₴'], ['UGX', 'USh'],
    ['USD', '$'], ['UYI', 'UYI'], ['UYU', '$U'], ['UYW', 'UYW'], ['UZS', 'лв'], ['VEF', 'Bs'],
    ['VES', 'Bs.S'], ['VND', '₫'], ['VUV', 'VT'], ['WST', 'WS$'], ['XAF', 'FCFA'], ['XBT', 'Ƀ'],
    ['XCD', '$'], ['XOF', 'CFA'], ['XPF', '₣'], ['XSU', 'Sucre'], ['XUA', 'XUA'], ['YER', '﷼'],
    ['ZAR', 'R'], ['ZMW', 'ZK'], ['ZWD', 'Z$'], ['ZWL', '$']
]);


export default {
    handleCompanyData,
    handleChart,
}

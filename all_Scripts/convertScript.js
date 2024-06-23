const exchangeRates = {
    usd: { eur: 0.85, gbp: 0.75, cad: 1.25 },
    eur: { usd: 1.18, gbp: 0.88, cad: 1.47 },
    gbp: { usd: 1.33, eur: 1.14, cad: 1.67 },
    cad: { usd: 0.80, eur: 0.68, gbp: 0.60 }
};

function convertCurrency(changedCurrency) {
    const value = parseFloat(document.getElementById(changedCurrency).value);

    if (!isNaN(value)) {
        for (let currency in exchangeRates) {
            if (currency !== changedCurrency) {
                const rate = exchangeRates[changedCurrency][currency];
                document.getElementById(currency).value = (value * rate).toFixed(2);
                document.getElementById(`${changedCurrency}-${currency}`).textContent = (value * rate).toFixed(2);
            }
        }
        document.getElementById(`${changedCurrency}-${changedCurrency}`).textContent = value.toFixed(2);
    }
}

// Initialize the table with exchange rates of 1 unit for each currency
function initializeTable() {
    for (let fromCurrency in exchangeRates) {
        for (let toCurrency in exchangeRates[fromCurrency]) {
            document.getElementById(`${fromCurrency}-${toCurrency}`).textContent = (1 * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        }
    }
}

initializeTable();

class Company {
    constructor(apiCompany) {
        this.symbol = apiCompany.symbol;
        this.companyName = apiCompany.companyName;
        this.description = apiCompany.description;
        this.changes = apiCompany.changes;
        this.price = apiCompany.price;
        this.currency = apiCompany.currency;
        this.image = apiCompany.image;
    }
}

export default Company;
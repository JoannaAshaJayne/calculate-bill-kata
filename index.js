const calculateBill = (price, vat, tip) => {

    if (typeOf (price, vat, tip) === "number") {
        let amount = price + (price * vat / 100) + tip;
        return "£" + amount;
    } else {
        return "error"
    }
};

module.exports = calculateBill; 
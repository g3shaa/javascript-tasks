function maximumToys(prices, k) {
    // Sort the prices in ascending order using quick sort
    prices.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;
    for (let price of prices) {
        if (sum + price <= k) {
            sum += price;
            count++;
        } else {
            break;
        }
    }
    return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); // 4
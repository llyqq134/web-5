function getSum(el) {
    let select = document.getElementsByName("product");
    let productType = select[0];
    let prices = [90, 100, 200];
    let amounts = [0, 0, 0];
    let priceIndex = parseInt(productType.value) - 1;

    if (priceIndex >= 0) {
        amounts[priceIndex]++;
    }

    let sum = 0;
     for(let i = 0; i < prices.length; ++i) {
        sum += amounts[i] * prices[i];
    }

    let result = document.getElementById("result");
    result.innerHTML = sum;

    return false;
}

function clearPage() {
    window.location.reload();
    return false;
}
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText)
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId) {
    debugger
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText)
    return value;

}
// তার ভিতরের Value আমাকে দিয়ে দাও।
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}
// Update Balance 
function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total')
    // const balanceInText = balanceTag.innerText;
    //  default initial balance = 2000; 
    // depositTotal - withdrawTotal + 2000; 

    const previousBalance = getInnerTextValue('balance-total')
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;

}

// handle deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true)
    }
})
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total')
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false)
    }
})
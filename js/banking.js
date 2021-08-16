function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const AmountText = inputField.value;
    const amount = parseFloat(AmountText);
    inputField.value = '';
    return amount;
};
function getTotalUpdate(totalFieldId, depositAmount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const totalAmount = parseFloat(totalText);
    const newTotalAmount = depositAmount + totalAmount;
    totalField.innerText = newTotalAmount;
};
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = depositAmount + balanceTotalAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
};
// deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    //deposit input field 
    const depositAmount = getInputField('deposit-input');
    if (depositAmount > 0) {
        //deposit total field
        getTotalUpdate('deposit-total', depositAmount);
        //balance update
        updateBalance(depositAmount, true);
    }

});
// withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input field
    const withdrawAmount = getInputField('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        //withdraw total field 
        getTotalUpdate('withdraw-total', withdrawAmount);
        //balance total update
        updateBalance(withdrawAmount, false);
    }
});


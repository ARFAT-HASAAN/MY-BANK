function getInputValue(inputId) {

    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;

}

function getAmmount(TheAmmount, inputammount) {

    const ammount = document.getElementById(TheAmmount);
    const ammountValu = parseFloat(ammount.innerText);
    ammount.innerText = ammountValu + inputammount
}


function balanceTotal(inputammount, issadd) {
    const balance = document.getElementById('balance-ammount');
    const balanceValue = parseFloat(balance.innerText);
    if (issadd == true) {
        balance.innerText = balanceValue + inputammount;
    } else {
        balance.innerText = balanceValue - inputammount;
    }

}

function totalBalance() {
    const balance = document.getElementById('balance-ammount');
    const balanceValue = parseFloat(balance.innerText);
    return balanceValue
}

document.getElementById('diposite-btn').addEventListener('click', function() {

    const inputammount = getInputValue('diposite-input')
    if (inputammount > 0) {
        getAmmount('diposite-ammount', inputammount);
        balanceTotal(inputammount, true)
    } else {
        window.alert('you can not diposite less then 1');
    }


})

document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawAmmount = getInputValue('withdraw-input')
    const balance = totalBalance()
    if (withdrawAmmount > 0 && withdrawAmmount < balance) {
        getAmmount('withdraw-ammount', withdrawAmmount)
        balanceTotal(withdrawAmmount, false)
    } else {
        window.alert("you can not withdraw greater then your balance and less then 0")
    }


})
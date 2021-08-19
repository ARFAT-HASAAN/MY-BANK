// same code withhoutn function  try 
document.getElementById('diposite-btn').addEventListener('click', function() {

    const dipositeinput = document.getElementById('diposite-input')
    const dipositeinputValu = parseFloat(dipositeinput.value);

    const dipositevalue = document.getElementById('diposite-ammount');
    const dipositeAmmountValue = parseFloat(dipositevalue.innerText);

    dipositevalue.innerText = dipositeAmmountValue + dipositeinputValu;

    dipositeinput.value = '';

    const balanceAmmount = document.getElementById('balance-ammount');
    const balanceAmmontvalue = parseFloat(balanceAmmount.innerText);

    balanceAmmount.innerText = balanceAmmontvalue + dipositeinputValu;
})

const withdraw = document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValu = parseFloat(withdrawInput.value);

    const withdrawAmmount = document.getElementById('withdraw-ammount');
    const withdrawAmmountValue = parseFloat(withdrawAmmount.innerText);

    withdrawAmmount.innerText = withdrawAmmountValue + withdrawInputValu;

    withdrawInput.value = "";

    const balanceAmmount = document.getElementById('balance-ammount');
    const balanceAmmontvalue = parseFloat(balanceAmmount.innerText);

    balanceAmmount.innerText = balanceAmmontvalue - withdrawInputValu;
})
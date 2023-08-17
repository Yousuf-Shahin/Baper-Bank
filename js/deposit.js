document.getElementById('deposite-button').addEventListener('click', function(){
    const depositField = document.getElementById('owner-deposit');
    const depositFeildAmountString = depositField.value;
    const newdepostiFeildAmount = parseFloat(depositFeildAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-dollar');
    const depositTotalString = depositTotalElement.innerText ;
    const depositTotal = parseFloat(depositTotalString);
    
    const totalDepositAmount = newdepostiFeildAmount + depositTotal;
    depositTotalElement.innerText = totalDepositAmount;

    const totalBalanceElement = document.getElementById ('total-balance');
    const totalBalanceAmountString = totalBalanceElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    
    const totalBalance = totalDepositAmount + totalBalanceAmount;
    totalBalanceElement.innerText = totalBalance;
})
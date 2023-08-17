document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawBalanceElemnt = document.getElementById('withdraw-amount');
    const withdrawBalanceString = withdrawBalanceElemnt.value;
    const prewithdrawBalance = parseFloat(withdrawBalanceString);
    
    withdrawBalanceElemnt.value = '' ;

    const totalWithdrawElement = document.getElementById('total-withdraw');
    const totalWithdrawAmountString = totalWithdrawElement.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);
    
    const totalWtithdraw =  prewithdrawBalance + totalWithdrawAmount;
    totalWithdrawElement.innerText = totalWtithdraw;

    const totalBalanceElement =  document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance =  parseFloat(totalBalanceString);

    const newTotalAmount = totalBalance - prewithdrawBalance;
    totalBalanceElement.innerText = newTotalAmount;
})
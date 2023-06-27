document.getElementById('calculate-btn').addEventListener('click', function() {
    //total income fetch
    const incomeTotal = document.getElementById('income-total');
    const incomeTottalResult = incomeTotal.value;

    const foodPrice = document.getElementById('food-price');
    const foodPriceResult = foodPrice.value;
    const rentPrice = document.getElementById('rent-price');
    const rentPriceResult = rentPrice.value;

    const clothPrice = document.getElementById('cloth-price');
    const clothPriceResult = clothPrice.value;

    //sum of all price
    const sumofAllPrice = parseInt(foodPriceResult) + parseInt(rentPriceResult) + parseInt(clothPriceResult);

    //minus main income to express

    const afterExpressBalence = parseInt(incomeTottalResult) - sumofAllPrice;
    // console.log(sumofAllPrice);
    // console.log(afterExpressBalence);

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = sumofAllPrice;

    const afterExpensesBalence = document.getElementById('balence');
    afterExpensesBalence.innerText = afterExpressBalence;




});

//save amount function

document.getElementById('save-btn').addEventListener('click', function() {
    //getting save balence input
    const savingAmountInput = document.getElementById('saving-amount-input');
    const savingAmountResult = savingAmountInput.value;
    console.log(savingAmountResult);

    //calculate parcentage of remaning balence
    const balenceAmoount = document.getElementById('balence');
    const balenceAmoountResult = balenceAmoount.innerText;
    console.log(balenceAmoountResult);



    //calculate saving amount
    const parcentage = (parseInt(savingAmountResult) / 100) * parseInt(balenceAmoountResult);
    console.log(parcentage);
    //show calculate amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(parcentage);


    //minus after expensis to remaning

    const remaninBalence = document.getElementById('reaming-balence');


    remaninBalence.innerText = parseFloat(balenceAmoountResult) - parseFloat(parcentage);


})
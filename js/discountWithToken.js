// console.log('this is lsdg')
document.getElementById('btn-apply-code').addEventListener('click', function(){
    // console.log('apply button clicked')


    const inputTokenElement = document.getElementById('input-token');
    const inputToken = inputTokenElement.value 
    // console.log(inputToken)
    inputTokenElement.value = '';

    if(inputToken !== 'DISC30'){
        alert('Invalid Token Code!');
        return;
    }

    const fixedPriceElement = document.getElementById('fixed-price-for-Token');
    const fixedPriceString = fixedPriceElement.innerText
    const fixedPrice = parseFloat(fixedPriceString);

    // console.log(fixedPrice)

    const discountPriceElement = document.getElementById('discount-total-Token');
    // calculating the %

    const finalPrice = fixedPrice - fixedPrice * 30 / 100;
    // console.log(finalPrice)
    discountPriceElement.innerText = finalPrice;

})
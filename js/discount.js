document.getElementById('btn-apply').addEventListener('click', function(){
    // console.log('apply button clicked ')

    const fixedPriceElement = document.getElementById('fixed-price');
    const fixedPriceString = fixedPriceElement.innerText;
    const fixedPrice = parseFloat(fixedPriceString);
    // console.log(fixedPrice)


    const discountPriceElement = document.getElementById('discount-total');
    // const discountPriceString = discountPriceElement.innerText;
    // const discountPrice = parseFloat(discountPriceString);
    // console.log(discountPrice);


    // calculating 30% of 1000;
    const discountOf30 =  fixedPrice - fixedPrice * 30 / 100 ;
    

    discountPriceElement.innerText = discountOf30;

})
let MoneyValue=prompt('Enter money value','value');
let Discount=prompt('Enter discount','discount');
let DiscountValue=MoneyValue/100*Discount;
let DiscountPrice=MoneyValue-DiscountValue;
let f;
if (MoneyValue<=0){
    f='invalid data';
}else{
        f='Price without discount: ' + MoneyValue +'\n'+'Discout: '+ Discount +'%'+'\n'+
        'Price with discount: '+ DiscountPrice +'\n' + 'Saved: '+ DiscountValue;
    }
console.log(f);
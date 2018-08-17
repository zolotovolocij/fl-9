let FirstSide=prompt('Enter 1st side','1st side');
let SecondSide=prompt('Enter 2nd side','2nd side');
let Angle=prompt('Enter angle','Angle');
let d=Angle*Math.PI/'180';
let ThirdSide=Math.sqrt(Math.pow(FirstSide,2)+Math.pow(SecondSide,2)-2*FirstSide*SecondSide*Math.cos(d));
let Perimeter=+FirstSide + +SecondSide + +ThirdSide;
let g=Perimeter/2;
let Square=Math.sqrt(g*(g-FirstSide)*(g-SecondSide)*(g-ThirdSide));
let r;
if (FirstSide<=0){
    r='Invalid data';
}else{
        r='c length: ' + +ThirdSide.toFixed(2) + '\n' + 'Triangle square: ' + +Square.toFixed(2) + '\n' +
        'Triangle perimeter: ' + +Perimeter.toFixed(2);
    }
console.log(r);
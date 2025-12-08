/* let broj1 = prompt("unesi prvi broj: ");
let broj2 = prompt("unesi drugi broj: ");
if(broj1 > broj2)
{
    alert (broj1 + "je veći od " + broj2);
}
else if(broj1 < broj2)
{
    alert (broj2 + "je veći od " + broj1);
}
else
{
    alert ("brojevi su jednaki");
} */

    let masa = prompt("Unesi masu u kg: ");
    let visina = prompt("Unesi visinu u m: ");
    let bmi = Math.round(masa/(visina*visina));
    
    alert ("Vaš BMI indeks iznosi:" + bmi);

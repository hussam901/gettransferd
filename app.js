const diesel = 2;
const autoVer = 6;
const autoBen = 0.1;

let firsttime =true ;
const distance = document.querySelector("#distance");
const time = document.querySelector("#time");
const button = document.querySelector("button");
const result = document.querySelector(".result");
const summeHead = document.querySelector("h2");

button.addEventListener("click",function (event){
    event.preventDefault();
    const distanceVal = Number(distance.value);
    const timeVal = Number(time.value);
    const dieselCost = distanceVal * 2 * diesel * autoVer / 100 ;
    const autoBenCost = distanceVal * 2 * autoBen ;
    const timeCost = timeVal * 2 * 15 / 60 ;
    let summe = dieselCost + autoBenCost + timeCost ;
    const company = summe * 14/100 ;
    summe += company;
    console.log(dieselCost,autoBenCost,timeCost,company,summe);
    summeHead.textContent = "the Result is :" + summe.toFixed(2) + " €";
    if(firsttime){
        firsttime = false ;
        const costDetiles = document.createElement("p");
        costDetiles.innerHTML = 
        `diesel = ${dieselCost.toFixed(2)} €<br>
        time cost = ${timeCost.toFixed(2)} €<br>
        car = ${autoBenCost.toFixed(2)} €<br>
        tranfer company = ${company.toFixed(2)} €`;
        result.appendChild(costDetiles);
    }
    const costDetiles = document.querySelector("p");
    costDetiles.innerHTML = 
        `diesel = ${dieselCost.toFixed(2)} €<br>
        time cost = ${timeCost.toFixed(2)} €<br>
        car = ${autoBenCost.toFixed(2)} €<br>
        tranfer company = ${company.toFixed(2)} €`;
        result.appendChild(costDetiles);
    

});
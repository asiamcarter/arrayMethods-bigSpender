//PRACTICE 1: BIG SPENDERS

let bigSpenders = [];

const getBigSpenders = businesses.filter(business => {
    if (business.orders.some(order => {
        return order > 9000;
    }))
        bigSpenders.push(business.companyName);
});

console.log(bigSpenders);
let outEl = document.querySelector("#output")
outEl.innerHTML += `
<h2>Big Spenders</h2>
`
bigSpenders.forEach(company => {
    outEl.innerHTML += `
    <p>${company}</p><hr/>
    `
})
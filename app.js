const selectKmElement = document.querySelector('.decided-km')
const rangeAgeElement = document.querySelector('.select-age')
const btnElement = document.querySelector('.generator')
const priceKm = 0.21

console.log(selectKmElement, rangeAgeElement, btnElement)

btnElement.addEventListener('click', function(){
    console.log('Genera biglietto')

    let priceTicket = selectKmElement.value * priceKm
    console.log('priceTicket')
})
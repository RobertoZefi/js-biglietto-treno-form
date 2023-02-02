const selectKmElement = document.querySelector('.decided-km')
const rangeAgeElement = document.querySelector('.select-age')
const btnElement = document.querySelector('.generator')
const priceKm = 0.21
let nomePasseggero = document.getElementById('name')
let name = document.getElementById('nome-passeggero')
const finalPrice = document.getElementById('price-ticket')
const cp = document.getElementById('codice-cp')
const carrozza = document.getElementById('carrozza')

console.log(selectKmElement, rangeAgeElement, btnElement)

btnElement.addEventListener('click', function(){
    console.log('Genera biglietto')
    console.log(nomePasseggero.value)
    name.innerHTML=nomePasseggero.value
    

    let priceTicket = parseFloat(selectKmElement.value * priceKm)
    console.log(selectKmElement.value, priceTicket)

    let discountMinorenni = 0.2
    let discountOver65 = 0.4
    let priceTicketDiscount

    switch (rangeAgeElement.value){
        case '1':
            priceTicketDiscount = parseFloat(priceTicket - priceTicket * discountMinorenni)
            console.log (priceTicketDiscount)
            finalPrice.innerHTML = priceTicketDiscount.toFixed(2) + "€"
            break

        case '2':
            console.log (priceTicket)
            finalPrice.innerHTML = priceTicket.toFixed(2) + "€"
            break
        
        case '3':
            priceTicketDiscount = parseFloat(priceTicket - priceTicket * discountOver65)
            console.log (priceTicketDiscount)
            finalPrice.innerHTML = priceTicketDiscount.toFixed(2) + "€"
            break
    }

    cp.innerHTML= Math.floor(Math.random() * 1000000)
    carrozza.innerHTML= Math.floor(Math.random() * 10)

})

const btnResetElement = document.querySelector('.reset')

btnResetElement.addEventListener('click', function(){
   console.log('reset')
   
})


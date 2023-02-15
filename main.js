// úkol 1
function button1Click() {
  let firstName = prompt('Zadejte vaše křestní jméno bez háčků a čárek:')
  let surname = prompt('Zadejte vaše příjmení bez háčků a čárek:')

  let nameTrim = firstName.trim()
  let surnameTrim = surname.trim()

  let nameThreeLetters = nameTrim.slice(0, 2)
  let surnameThreeLetters = surnameTrim.slice(0, 4)

  let emailText = document.querySelector ('.email-text')
  emailText.innerHTML = `<p>Váš nový email je:</p> 
  <h2>${surnameThreeLetters}${nameThreeLetters}@fit.cvut.cz</p>`  

  let buttonDone = document.querySelector ('.button-email')
  buttonDone.textContent = ' Hotovo!'
  buttonDone.style.backgroundColor = '#6CC417'
  
}

// úkol 2

function button2Click () {
  let customerNumber = Number(prompt('Zadejte počet kusů, např. 158'))
  let itemPrice = '0'
  if (customerNumber <=49 ) {
    itemPrice = 300
  } else if (customerNumber <=199) {
    itemPrice = 250
  } else if (customerNumber <=499) {
    itemPrice = 200
  } else if (customerNumber <=999) {
    itemPrice = 150
  } else if (customerNumber >=1000) {
    itemPrice = 120
  }
  let finalPrice = itemPrice * customerNumber

  let finalPriceText = document.querySelector ('.price-text')
  finalPriceText.innerHTML = `<p>Vaše výsledná cena je:  <strong> ${finalPrice} Kč </strong></p>`

}






// VARIABLES GLOBALES
// Usuario: cantidad, color seleccionado
function calculo() {
    let userQty = document.querySelector('#qty')
    userQty = userQty.value
    let userColor = document.querySelector('#color')
    userColor = userColor.value
    // Precio fijo producto
    let listPrice = document.getElementById('Price')
    // console.log(listPrice)
    listPrice = listPrice.innerHTML
    listPrice = parseInt(listPrice.replace(/\./g, ''))
    console.log(listPrice)
    const finalColor = document.querySelector('circle')


    // CONDICIÓN

    if (userQty == '' || userQty == '0' || userColor == '') {
        grossTotal.innerHTML = '-'
        totalQty.innerHTML = '-'
        finalColor.style.fill = 'white'
    }
    else {
        if (userQty >= '1' && userColor != '') {
            let PrecioTotal = listPrice * userQty
            const grossTotal = document.querySelector('#grossTotal')
            grossTotal.innerHTML = PrecioTotal.toLocaleString('es-CL')
            totalQty.innerHTML = userQty
            finalColor.style.fill = userColor
        }
        else {
            return
        }
    }
}
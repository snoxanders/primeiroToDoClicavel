let btn = document.querySelector('button.add-btn')
let lista = document.querySelector('ul.main-list');
let arrayLista = []



btn.addEventListener("click", (e) => {
    e.preventDefault();
    let newItem = document.createElement('li');
    let input = document.querySelector('input.main-input');
    let valor = input.value;
    lista.appendChild(newItem);
    newItem.innerHTML = valor;
    arrayLista.push(valor);
    console.log(arrayLista);

    newItem.onclick = function () {
        newItem.remove();
    }


});





//let indexArray = arrayLista.indexOf(valor);
       // console.log(indexArray);
      //  arrayLista.splice(indexArray, 1);
       // console.log(arrayLista);


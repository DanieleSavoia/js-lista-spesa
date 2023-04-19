const ListaSpesa = [];
let val = prompt("cosa vuoi aggiungere alla lista? (inserisci STOP per terminare)")
while (val !== 'STOP' ) {
    ListaSpesa.push(val);
    val = prompt("cosa vuoi aggiungere alla lista? (inserisci STOP per terminare)")
}

document.getElementById("ul-list").innerHTML = ListaSpesa;
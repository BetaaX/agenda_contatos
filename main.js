const form = document.getElementById('form-contact');
const tabela = document.getElementById('tabela-contatos');
const nome = document.getElementById('name');
const tel = document.getElementById('tel');

let contador = 0;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (contador === 0) {
        let linhaVisual = document.getElementById('visualSheet');
        if(linhaVisual) {
            linhaVisual.remove();
        }
    }
    if (contador >= 20) {
    alert("Número máximo de contatos atingido");
    return;
    }
    
    adicionaContato();
});

function adicionaContato() {
    let novaLinhaContato = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    
    td1.textContent = `${nome.value}`;
    td2.textContent = `${tel.value}`;
    
    novaLinhaContato.appendChild(td1);
    novaLinhaContato.appendChild(td2);
    
    tabela.appendChild(novaLinhaContato);
    
    contador++;
}
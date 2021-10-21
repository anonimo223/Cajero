
function accionCaja() {
    let seleccionar = document.querySelector('select');
    
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let listaDinero = [100000]

    let eleccionOp = seleccionar.value;

        if (eleccionOp === 'retiro') {
            let p = document.getElementById("saldoCuenta");
            let retiroSaldo = cantidad - listaDinero; 
            p.innerHTML += retiroSaldo + "Es el saldo que tiene :)";
            return false;

        } else if (eleccionOp === 'consignas'){
            let p = document.getElementById("saldoCuenta");
            let consignaSaldo = cantidad + listaDinero; 
            consignaasaldo += 1;
            p.innerHTML += consignaSaldo + "<br>";
            return false;

        } else if(eleccionOp === 'saldo') {
            let p = document.getElementById("saldoCuenta");
                let verSaldo = document.getElementById("MostrarSaldo");s
                let mostrar = verSaldo + listaDinero;
            p.innerHTML += mostrar + "<br>";
            return false;

        }else if(eleccionOp === ' '){
            p.innerHTML += "Porfavor, selecciona una opcion >:v";
        }
}
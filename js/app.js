let arregloGastos = [];
let indiceGastos = 0;

const ObtenerIngreso = () => {
    let ValorIngresado = document.getElementById("importe-input").value;
    document.getElementById("nro_ing").innerHTML = `$${ ValorIngresado }`;
    document.getElementById("nro_dis").innerHTML = `$${ ValorIngresado }`;
    if (ValorIngresado >= 0) {
        document.getElementById("nro_dis").style.color = "green";
    } else {
        document.getElementById("nro_dis").style.color = "red";
    }
}

const ObtenerGastos = () => {
    let ValorIngresado = document.getElementById("importe-input").value;
    let detalleIngresado = document.getElementById("detGastos").value;
    let gastoIngresado = document.getElementById("impGastos").value;
    arregloGastos.push([`${ detalleIngresado }`, `${ gastoIngresado }`]);
    document.getElementById("js_gastos").innerHTML = "";
    let len = arregloGastos.length;
    let sumaGastos = 0;
    for (let i = 0; i < len; i++) {
        document.getElementById("js_gastos").innerHTML += `<div class="itemGastos"> <p>${arregloGastos[i][0]}</p>  <p>$${arregloGastos[i][1]} <i class="bi bi-trash" onclick="BorrarGastos(${i})"></i></p></div>`;
        sumaGastos = parseInt(sumaGastos) + parseInt(`${ arregloGastos[i][1]}`)
        document.getElementById("nro_gas").innerHTML = `$${ sumaGastos }`;
        let totalConGastos = ValorIngresado - sumaGastos;
        document.getElementById("nro_dis").innerHTML = `$${ totalConGastos }`;
        if (totalConGastos >= 0) {
            document.getElementById("nro_dis").style.color = "green";
        } else {
            document.getElementById("nro_dis").style.color = "red";
        }
    }
}

const BorrarGastos = indiceArreglo => {
    arregloGastos.splice(indiceArreglo, 1)
    let ValorIngresado = document.getElementById("importe-input").value;
    let len = arregloGastos.length;
    let sumaGastos = 0;
    document.getElementById("js_gastos").innerHTML = "";
    if (len == 0) {
        document.getElementById("nro_gas").innerHTML = `$0`;
        document.getElementById("nro_dis").innerHTML = `$${ ValorIngresado }`;
    } else {
        for (let i = 0; i < len; i++) {
            document.getElementById("js_gastos").innerHTML += `<div class="itemGastos"> <p>${arregloGastos[i][0]}</p>  <p>$${arregloGastos[i][1]} <i class="bi bi-trash" onclick="BorrarGastos(${i})"></i></p></div>`;
            sumaGastos = parseInt(sumaGastos) + parseInt(`${ arregloGastos[i][1]}`)
            document.getElementById("nro_gas").innerHTML = `$${ sumaGastos }`;
            let totalConGastos = ValorIngresado - sumaGastos;
            document.getElementById("nro_dis").innerHTML = `$${ totalConGastos }`;
            if (totalConGastos >= 0) {
                document.getElementById("nro_dis").style.color = "green";
            } else {
                document.getElementById("nro_dis").style.color = "red";
            }
        }
    }
}
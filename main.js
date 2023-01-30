const converdivi = (money,type) =>{
    switch (type){
        case "USD-EUR":
            return [money*0.917843801,"Euros"];
        case "USD-GBP":
            return [money*0.80911385, "Libra esterlina"];
        case "USD-JPY":
            return [money*130.39118659, "Yen Japones"];
        case "USD-COP":
            return [money*4660.67924739, "Peso Colombiano"];
        default:
            window.alert("No se reconoce divisa ingresada, Por favor vuelva a intentar con otra divisa");
    }
};
let type = prompt("Ingrese que tipo de divisa desea cambiar. Las opciones permitadas son : USD-EUR,USD-JPY, USD-COP ").toUpperCase();
let money = parseInt(prompt("Ingrese la cantidad de dinero que desea convertir :"));

let conver = converdivi(money,type);

window.alert(`${money} Dolares estadounidenses = ${conver[0]} ${conver[1]}`)
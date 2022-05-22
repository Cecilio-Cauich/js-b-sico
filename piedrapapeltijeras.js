var yomero = "tijeras";
elementos = ["tijeras", "papel", "piedra"];
var maquina = elementos[Math.floor(Math.random() * 3)];
console.log(maquina)
switch(maquina, yomero){
    case "papel", "papel":
        console.log("Empate");
        break;
    case "papel", "tijeras":
        console.log("Ganaste")
        break;
    case "papel", "piedra":
        console.log("Perdiste");
        break;
    case "piedra", "piedra":
        console.log("Empate");
        break;
    case "piedra", "papel":
        console.log("Ganaste");
        break;
    case "piedra", "tijeras":
        console.log("Perdiste");
        break;
    case "tiejras", "tijeras":
        console.log("Empate");
        break;
    case "tijeras", "piedra":
        console.log("Ganaste");
        break;
    case "tijeras", "papel":
        console.log("Perdiste");
        break;
    default:
        console.log("Opcion incorrecta");
}
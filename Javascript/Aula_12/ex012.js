var agora = new Date()
var hora = agora.getHours
if (hora >= 00 && hora <= 5){
    console.log(`Agora são ${hora} horas da madrugada`)
}else if(hora < 12) {
    console.log(`Agora são ${hora} horas da manhã`)
} else if (hora >= 18) {
    console.log(`Agora são ${hora} horas da noite`)
}

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!') 
} else {
    console.log('Boa Noite!')
}
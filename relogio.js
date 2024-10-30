// CRIAR 3 CONSTANTES(CONST) CHAMADAS HORAS,MINUTOS E SEGUNDOS

const caixaHoras = document.getElementById("horas");

const caixaMinutos = document.getElementById("minutos");

const caixaSegundo = document.getElementById("segundo");

const caixaDate = document.getElementById("date")

const options = {weekday:'long', year: 'numeric' ,
month: 'short' , day: 'numeric'};





const relogio = setInterval(() => {
    
    let dateToday = new Date();
    
    let date = dateToday.toLocaleDateString("pt-br",options);
    
    let hr = dateToday.getHours();

    let min = dateToday.getMinutes();

    let sec = dateToday.getSeconds();

if (hr < 10) hr = '0' + hr;

if (min < 10) min ="0" + min;

if (sec < 10) sec = "0" + sec

caixaDate.textContent = date;
    caixaHoras.textContent = hr;
        caixaMinutos.textContent = min;
    caixaSegundo.textContent = sec;

    
}, 10);
let nav = document.getElementById('mecSoc');

function menu(){
    
    let Desplazamiento = window.pageYOffset;
    
    if (Desplazamiento >= 40) {

        nav.classList.remove('bg-dark');
        nav.className = ('bg-dark1');
        nav.style.transition = '1s';
        
    }else{

        nav.classList.remove('bg-dark1');
        nav.className = ('bg-dark');
        nav.style.transition = '1s';

    }
}

window.addEventListener('load', function(){
    menu();    

});

window.addEventListener('scroll', function(){
    menu();
});

window.onload = function() {
    var fecha;
    var hora;
    
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;
fechap=[day,month,year].join('-')



    document.getElementById("ejecucion").innerHTML = fechap;

};


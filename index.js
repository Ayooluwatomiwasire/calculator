let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


buttons.map (button =>{
button.addEventListener('click', (e) =>{
    switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            return;

        case '←':
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);

            }
            return;
            
        case'=':
            try{
                display.innerText = eval(display.innerText);

            } catch{
                display.innerText = 'Error!'
            }
            

            return;

        default:
            display.innerText += e.target.innerText;
    }  
   


});
});





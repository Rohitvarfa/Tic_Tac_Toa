var restartb=docoment.querySelector('#b');
var cells = document.querySelectorAll('td');
function clearAllCells(){
    for(var i = 0;i<cells.length;i++){
        cells[i].textContent='';
    }
}
restartb.addEventListner('click',clearAllCells);
function changeContent(){
    if(this.textContent===''){
        this.textContent='X';
    }
    else if(this.textContent==='X'){
        this.textContent='O';
    }
    else{
        this.textContent='';
    }

}
for(var i=0;i<cells.length;i++){
    cells[i].addEventListener('click',changeContent);
}
const container = document.getElementById(`container`);
const button = document.getElementById(`changeSize`);
const clearbutton = document.getElementById(`clearGrid`);

clearbutton.addEventListener(`click`, clear);
button.addEventListener(`click`, defaultGrid);

function defaultGrid(size){
    size = prompt(`Select Grid Size`);
    clear();
    for (i = 0 ; i<size; i++){
        let row = document.createElement(`div`);
        row.classList.add(`cell`);
        container.appendChild(row);
        for(j=0 ; j<size; j++){
            let cell = document.createElement(`div`);
            cell.classList.add(`subcell`);
            row.appendChild(cell);
            cell.onmouseover = () =>{
                cell.style.background = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.5)`;
            }
        }
    }
}

function clear(){
    let element1 = container.lastChild;
    if (element1 != null){
        container.lastChild.remove();
        clear();
    } else {
        return 0;
    }
}

//document.get

const container = document.getElementById(`container`);
const button = document.getElementById(`changeSize`);

button.addEventListener(`click`, defaultGrid);

function defaultGrid(size){
    //clear();
    size = prompt(`Select Grid Size`);
    for (i = 0 ; i<size; i++){
        let row = document.createElement(`div`);
        row.classList.add(`cell`);
        container.appendChild(row);
        for(j=0 ; j<size; j++){
            let cell = document.createElement(`div`);
            cell.classList.add(`subcell`);
            //cell.addEventListener(`mouseover`, paintimage());
            row.appendChild(cell);
            cell.onmouseover = () =>{
                cell.style.background = `black`;
            }

        }
    }
}

const cells = document.getElementsByClassName(`subcell`);

cells.addEventListener(`mouseover`, darken());

function darken(){

}

/* function clear(){
    let container = document.getElementById(`container`);
    while(container.hasChildNodes){
        container.removeChild(container.lastElementChild);
    }
} */
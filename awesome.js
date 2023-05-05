
const getParentGrid = document.getElementById("main-body")
const clickEvent = document.getElementsByName('click-event')


// DEBUGGING AREA

console.log(clickEvent)





//
function getCLickEvent(){
    let data = ''
    clickEvent.forEach(function (e){
        if(e.checked === true){
            console.log(e.value)
            data = e.value
        }
    })
    return data
}



// handles the rows number generator
const getRowsRange = document.getElementById('row-range')
const getRowsDisplay = document.getElementById('show-rows')
getRowsRange.addEventListener('change', getRowsValue)


// handles the column number generator
const getColumnsRange = document.getElementById('column-range')
const getColumnsDisplay = document.getElementById('show-columns')
getColumnsRange.addEventListener('change', getColumnsValue)

function grid(rows, columns){
    for(let i=0;i<rows;i++){
        let rowGrid = document.createElement('div')
        rowGrid.setAttribute('class','grid-row')
        getParentGrid.appendChild(rowGrid)

        for(let j=0;j<columns;j++){
            let singleGrid = document.createElement('div')
            singleGrid.setAttribute('class','single-grid')
            rowGrid.appendChild(singleGrid)
        }
    }
}



function getRowsValue(){
    getRowsDisplay.textContent = getRowsRange.value
}
function getColumnsValue(){
    getColumnsDisplay.textContent = getColumnsRange.value
}


const btnGenerate = document.getElementById('generate-workspace')

function init(){
    const rows = getRowsRange.value
    const columns = getColumnsRange.value
    getParentGrid.innerHTML = ''
    grid(rows,columns)

    let clickEvent = getCLickEvent()

    const getSquares = document.getElementsByClassName('single-grid')
    Array.from(getSquares).forEach((e) => {
        e.addEventListener(clickEvent, function(){
            console.log('filled')
            e.classList.add("fill");
        })
    })


}
btnGenerate.addEventListener('click',init)
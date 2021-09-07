$( document ).ready( onReady );

// function to run when document is ready
function onReady(){
    $('#generatorButton').on ('click', generator );
} // end onReady

let sectionNumber = 1;

// function to create new section on page
function generator(){
    $('#mainDiv').append(
        '<div id="section"><p id="sectionID" style="bold"></p></div>'
    )
    $(document.getElementById('sectionID').id = 'sectionID' + sectionNumber);
    $(document).find('#sectionID' + sectionNumber).append('Section: ' + sectionNumber);
    $(document.getElementById('section').id = 'section' + sectionNumber);
    $(document. getElementById('section' + sectionNumber). style. backgroundColor = 'red')
    $(document).find('#section' + sectionNumber).append(
        '<button id="changeColorButton">Change Color</button>');
    $(document.getElementById('changeColorButton').id = 'changeColorButton' + sectionNumber);
    $(document).find('#section' + sectionNumber).append(
        '<button id="deleteDivButton">Delete Section</button>');
    $('#deleteDivButton' + sectionNumber).on ( 'click', deleteSection() );
    sectionNumber++
} // end generator function



function deleteSection(sectionToDelete){
    console.log("in deleteSection");
    //$('#section'+ sectionToDelete).empty();
}
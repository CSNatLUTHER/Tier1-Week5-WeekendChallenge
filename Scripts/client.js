$( document ).ready( onReady );

// function to run when document is ready
function onReady(){
    $('#generatorButton').on ('click', generator );
} // end onReady

let sectionNumber = 1;

// function to create new section on page
function generator(){
    // add a new section 
    $('#mainDiv').append(
        '<div id="section"><strong><p id="pTagSection"></p></strong></div>'
    )
    // label the newly created section with incrementing number
    $(document.getElementById('pTagSection').id = "pTagSection" + sectionNumber);
    $(document).find('#pTagSection' + sectionNumber).append('Section: ' + sectionNumber);
    // assign a unique ID to section for targeting later
    $(document.getElementById('section').id = sectionNumber);
    // Set the background color of the section
    $(document. getElementById(sectionNumber). style. backgroundColor = 'red')
    // insert a 'change color' button.
    $(document).find('#' + sectionNumber).append(
        '<input class="changeColorButton" type="button" value="Change Color">');
    // insert a 'delete section' button.
    $(document).find('#' + sectionNumber).append(
        '<input class="deleteDivButton" type="button" value="Delete Section">');
    // assign function to 'delete section' button.   
    $('.deleteDivButton').on ('click', deleteSection );
    // assign function to 'change color' button.
    $('.changeColorButton').on ('click', changeColor );
    // increment the section number
    sectionNumber++
} // end generator function


// delete a section function
function deleteSection(){
    console.log("in deleteSection");
    // $('#section'+ sectionToDelete).empty();
}

// change the color function
function changeColor(){
    console.log("in changeColor");
    // $('#section'+ sectionToDelete).empty();
}
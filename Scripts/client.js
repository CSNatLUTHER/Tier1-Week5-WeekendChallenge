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
        '<input id="changeColorButton" type="button" value="Change Color">');
    // create uniqie ID for change color button
    $(document.getElementById('changeColorButton').id = "changeColorButton" + sectionNumber);
    // insert a 'delete section' button.
    $(document).find('#' + sectionNumber).append(
        '<input id="deleteDivButton" type="button" value="Delete Section">');
    // create uniqie ID for delete button
    $(document.getElementById('deleteDivButton').id = "deleteDivButton" + sectionNumber);
    // set variable for delete button id
    let el = ("#deleteDivButton" + sectionNumber);
    // assign function to 'delete section' button.   
    $(el).click ( deleteSection );
    // assign function to 'change color' button.
    // set variable for delete button id
    let el2 = ("#changeColorButton" + sectionNumber);
    $(el2).click ( changeColor );
    // increment the section number
    sectionNumber++
} // end generator function


// delete a section function
function deleteSection(sectionID){
    let el = sectionID.target.id;
    let el2 = $('#'+ el).parent()
    $(el2[0]).empty()
}

// change the color function
function changeColor(sectionID){
    // get id number of button clicked
    let el = sectionID.target.id;
    // get parent element of button (div to delete)
    let el2 = $('#'+ el).parent()
    // get id of div to delete and convert to number
    let el3 = Number(el2[0].id);
    // change background color from red to yellow
    if ($("#" + el3).css('backgroundColor') === 'rgb(255, 0, 0)') {
        $(document.getElementById(el3). style. backgroundColor = 'yellow')
    } // end if 
    // change background color from yellow to red
    else if ($("#" + el3).css('backgroundColor') === 'rgb(255, 255, 0)') {
        $(document.getElementById(el3). style. backgroundColor = 'red')
    } // end else  
} // end changeColor function
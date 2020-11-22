# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

language 
1-HTML 
2-Css
3-JavaScript


build navigation Method 

1- defined global variable
2- assignment
   A- Get all the sections 
   B- get elements by id 'navbar_list' returning the reference to id value 

3- create a fragment (https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)   
4- build nav. 
    A- loop on each section 
    B- getattribute 'data-nav' 
    C- creating the elements 
    D-for scroll ,add an eventlistener to the sectionlink for smoth switching through each section
    E- create a textNode from section text 
    F- Adding a node at the end using appendchild()
        child is a DocumentFragment, the entire contents of the DocumentFragment are moved into the child list of the specified parent node.
    

    User Active section 
    1- build the fuction 
    2- call all the links (querySelectorAll)
    3- get the active section
    4- remove all the section and then call the active one 
    
    clientRect 
    1- loop over the sections 
    2- defined the screen dimntions (top ,bottom )
    3- if statment to switch from one active section to another
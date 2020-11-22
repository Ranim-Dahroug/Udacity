

const sections;

const ulList;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sections = document.querySelectorAll("section");
ulList = document.getElementById('#navbar__list');

//building navigator function 
//create a fragment to hold the nodes  
const fragment = document.createDocumentFragment();
//for each to iterate over sections 
sections.forEach(section => {
	//returning the value of data_nav
	
    let sectionText = section.getAttribute("data_nav");
    //creating HTML elements 
	
    let liList = document.createElement('li');

    let sectionLink = document.createElement("a");
	//event listener for scrollIntoView 
    sectionLink.addEventListener("click",()=> {
    
    section.scrollIntoView({behavior: "smooth"});
    })
    //containing the data in text node
    let NodeText = document.createTextNode(sectionText);
    
	//adding nodes to the end of the list
    sectionLink.appendChild(NodeText);
    liList.appendChild(sectionLink);
    fragment.appendChild(liList);
});
ulList.appendChild(fragment);


//Active section method
//main function 
function active_link(active_section){
	//returning the first link					
    let links =document.querySelectorAll('a');
	//returining the value of data-nav
    let section_navigator = active_link.getAttribute('data-nav');
	//iterate over links
    links.forEach( link => {
		//active link selection
        if(links.textcontent == section_nav){
            link.querySelectorAll('a');
			//removing Active class from all links,give the active link class active
            link.classlist.remove('your-active-link');
            link.classList.add('your-active-link');
        }

    }
}
//defining the screen dimentions 

sections.forEach((section) =>{
let rection = section.getBoundingClientRect();
t = rection.top;
b =rection.bottom;

if( (rection.top => 0 )&& (rection.bottom < window.innerHeight)){
    querySelectorAll('section');
    section.classList.remove('your-active-class')
    section.classList.add('your-active-class');
    active_link(section);
}
})
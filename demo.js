//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='hello';
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);


//SELECTING METHODS

//GET ELEMENT BY ID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='goodbye';
//console.log(headerTitle.textContent);

//headerTitle.innerHTML='<h3>hello</h3>';

header.style.border='solid 4px black';


//GETELEMENTSBYVCLASSNAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent='ITEM 2';
items[1].style.backgroundColor='red';

//items.stle.backgroundColor='yellow';


for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='teal';
}


//GETELEMENT BY TAG NAME


// var items=document.getElementsByClassName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.fontweight='bold';
// li[1].textContent='Hello girl';
// li[1].style.backgroundColor='red';

// //items.stle.backgroundColor='yellow';


// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='grey';
// }

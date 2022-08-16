let url = './partials/home.html';
let dd = document.getElementById('dynamic-data');
let btns = document.querySelectorAll('nav ul li a');

function handleAjax(urlVar) {
    fetch(urlVar)
    .then(function (rsp) { 
        return rsp.text();
    })
    .then(function (data) { 
        // console.log(data);
        dd.innerHTML = data;
    });
}

handleAjax(url);

// create clickHan;dler
function handleClick(e){
    // prevent default
    e.preventDefault();
    // grab the reference to the currently clciked element (e.target)
    let currentClick = e.target;

    // call ajax inside the body of this function
   handleAjax(currentClick.href);
// function ends here
}
// register your links for clcik ebvent
for (let btn of btns){
    btn.addEventListener("click",handleClick)
}


$(document).ready(function () {
    let descriptions = document.getElementsByClassName('description'),
        max_length = 150,
        symIndex;

    for (let i = 0; i < descriptions.length; i++) {
        // symIndex = descriptions[i].textContent.indexOf('|enough');
        // if (symIndex > max_length){
        descriptions[i].innerHTML = descriptions[i].innerHTML.substr(0, max_length) + '...';
        // }
        // else {
        //     descriptions[i].innerHTML = descriptions[i].innerHTML.substr(0, symIndex) + '...';
        // }
    }
});

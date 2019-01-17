$(document).ready(function () {
    var descriptions = document.getElementsByClassName('description'),
        max_length = 150;
    for (var i = 0; i < descriptions.length; i++){
        descriptions[i].innerHTML = descriptions[i].innerHTML.substr(0, max_length) + '...';
    }
    });

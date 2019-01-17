$(document).ready(function () {
    var info = document.getElementById('info'),
        portfolio = document.getElementById('portfolio'),
        intro_bottom = document.getElementById('introduction').getBoundingClientRect().bottom + window.pageYOffset,
        information = document.getElementById('information'),
        margin = 400;

    function visibility(bool) {
        if (!bool) {
            information.style.display = 'block';
            info.style.opacity = 1;
            info.style.cursor = 'pointer';
        }
        else {
            information.style.display = 'none';
            info.style.opacity = 0;
            info.style.cursor = 'default';
        }

    }

    function toggle(bool) {
        if (!bool) {
            info.style.marginLeft = 0;
            information.style.marginLeft = -margin + 'px';
            portfolio.style.marginLeft = 0;
        }
        else {
            info.style.marginLeft = -margin + 'px';
            information.style.marginLeft = 0;
            portfolio.style.marginLeft = -margin + 'px';
        }
    }

    function makeMargin(bool){
        if (bool){
            info.style.marginLeft = 0;
            information.style.marginLeft = -margin + 'px';
            portfolio.style.marginLeft = 0;
        } else{
            info.style.marginLeft = margin + 'px';
            information.style.marginLeft = 0 + 'px';
            portfolio.style.marginLeft = margin + 'px';
        }
    }
    visibility(window.pageYOffset < intro_bottom);
    $(document).on('scroll', function () {
        visibility((window.pageYOffset) < intro_bottom);
        if ((window.pageYOffset) < intro_bottom) {
            toggle(info.style.marginLeft == margin + 'px');

        }
    });
    $('#info').on('click', function () {
        makeMargin(info.style.marginLeft == margin + 'px');
    });

});
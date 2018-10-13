function showArmorMenu (e, menuToHide,refElem = document.querySelector('.refElement'), plac = 'right-start') {
    let clickedArea = e.target;
    let clickedAreaId = clickedArea.id;
    let hiddenMenu = $(`#${clickedAreaId}_drop`);
    let container = $('#column_one_row_one');
    console.log(container);
    closeAllWindows(menuToHide);
        hiddenMenu.addClass('show');
        hiddenMenu.show();
        var popper = new Popper (refElem, hiddenMenu, {
            placement: plac,
            modifiers: {
                flip: {
                    behavior: ['right-start, bottom']
                },
                preventOverflow: {
                    boundariesElement: container,
                }
            }
        })
    }
function closeAllWindows (elems) {
    $(elems).hide().removeClass('show');
};
function closeNavbar (elems) {
    $(elems).removeClass('show');
}

$('.subMenu1').hide();
$('area').on('click', function(e) {
    e.stopPropagation();
    clearTheResults ()
    closeAllWindows('.subMenu2');
    showArmorMenu(e, '.subMenu1');
});
$('.subMenu1').on('click', function(e) {
    if(e.target.matches('.subMenu1 > a')) {
    e.stopPropagation();
    clearTheResults ()
    showArmorMenu(e, '.subMenu2', e.target, 'bottom')
    }
});
$('body > div.container-fluid').on('click', function(e) {
    e.stopPropagation();
    clearTheResults ()
    if (!e.target.matches('.clickProof')) {
        closeAllWindows('.subMenu1');
        closeAllWindows('.subMenu2');
        closeNavbar('#armorsDiv');
        closeNavbar('#mainbarDropdown + .dropdown-menu');
    }   
})
addEventListener('mouseover', whatIsItHoveringOn);
addEventListener('mouseout', whatIsItHoveringOn); 

function whatIsItHoveringOn (event) {
        let hoveredArea = event.target.id;
        toggleTheTable(hoveredArea);
};
// $('area').on('mousemove', printMousePos);

// function printMousePos(event) {
//     console.log((event.clientX+5) + ',' + (event.clientY-106));
//   }

const selectField = document.getElementById('select-field');
const selectText = document.getElementById('select-text');
const menuItems = document.getElementsByClassName('menu-item');
const menuList = document.getElementById('menu-list');
const arrowIcon = document.getElementById('arrow-icon');

selectField.onclick = function() {
    menuList.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}

for(menuItem of menuItems) {
    menuItem.onclick = function() {
        selectText.innerHTML = this.textContent;
        selectText.style.fontWeight = 'normal';
        menuList.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}
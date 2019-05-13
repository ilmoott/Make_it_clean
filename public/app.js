const DOMStrings = {
    menu : ".navigation__checkbox",
    menu_link: ".navigation__link",
    menu_list: ".navigation__list",
    popup_close: ".popup__close",
    popup_book: ".book_close",
    popup: ".popup",
    navigation: ".navigation"
};

const menu = document.querySelector(DOMStrings.menu);
const menu_link = document.querySelectorAll(DOMStrings.menu_link);
const menu_list = document.querySelectorAll(DOMStrings.menu_list);

menu_link.forEach(function(e){
    e.addEventListener('click',function(){
        menu.checked = false;
    });
    if(menu.checked === false){
        menu_list.style.display = "none";
    }else{
        menu_list.style.display = "block";
    }
});



const popup = document.querySelector(DOMStrings.popup);

popup.addEventListener('click',function(e){
    if (e.target = popup){
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
    }
});


//NAVIGATION BUTTON
// const navigation = document.querySelector(DOMStrings.navigation);

// navigation.addEventListener('click', function(){
//     if(navigation.style.display === "none"){
//         navigation.style.display = "block";
//     }else{
//         navigation.style.display = "none";
//     }
// });


const DOMStrings = {
    menu : ".navigation__checkbox",
    menu_link: ".navigation__link",
    popup_close: ".popup__close",
    popup_book: ".book_close",
    popup: ".popup",
    navigation: ".navigation"
};

const menu = document.querySelector(DOMStrings.menu);
const menu_list = document.querySelectorAll(DOMStrings.menu_link);

menu_list.forEach(function(e){
    e.addEventListener('click',function(){
        menu.checked = false;
    })
});



const popup = document.querySelector(DOMStrings.popup);

popup.addEventListener('click',function(e){
    if (e.target = popup){
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
    }
});


//NAVIGATION BUTTON
const navigation = document.querySelector(DOMStrings.navigation);

navigation.addEventListener('click', function(){
    if(navigation.style.display === "none"){
        navigation.style.display = "block";
    }else{
        navigation.style.display = "none";
    }
});




console.log('test');
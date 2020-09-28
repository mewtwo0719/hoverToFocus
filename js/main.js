tabs = document.getElementsByClassName("tabC");
tabLinks = document.getElementsByClassName("tab");

function swapTab(n){
    console.log(n);
    for(var i = 0; i < tabs.length; i++){
        tabs[i].classList.add("hidden");
        tabs[i].classList.remove("active");
        tabLinks[i].classList.remove("active");
    }
    tabs[n].classList.add("active");
    tabLinks[n].classList.add("active");
}
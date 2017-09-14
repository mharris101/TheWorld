// site.js

(function() {
    var ele = document.getElementById("username");
    ele.innerHTML = "Matt Harris";

    var main = document.getElementById("main");
    main.onmouseenter = () => {
        main.style.backgroundColor = "#888";
    };

    main.onmouseleave = () => {
        main.style.backgroundColor = "";
    };
})();

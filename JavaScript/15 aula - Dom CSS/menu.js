let sidebar = document.getElementById("mysidebar")
let main = document.getElementById("main")

function openNav(){
    sidebar.style.width = "200px"
    main.style.marginLeft = "200px"
}
function closenav(){
    sidebar.style.width = "0"
    main.style.marginLeft = "0"
}


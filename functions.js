let cssMode = localStorage.getItem("cssMode");

function apple_mode()
{
    cssMode = localStorage.getItem("cssMode");
    document.getElementById('page_style').setAttribute("href", "apple.css");
    localStorage.setItem("cssMode","apple");
}

function windows_mode()
{
    cssMode = localStorage.getItem("cssMode");
    document.getElementById('page_style').setAttribute("href", "windows.css");
    localStorage.setItem("cssMode","windows");
}

function noCSS_mode()
{
    cssMode = localStorage.getItem("cssMode");
    document.getElementById('page_style').setAttribute("href", "");
    localStorage.setItem("cssMode","noCSS");
}

if(cssMode === "apple")
{
    apple_mode();
}

if(cssMode === "windows")
{
    windows_mode();
}

if(cssMode === "noCSS")
{
    noCSS_mode();
}
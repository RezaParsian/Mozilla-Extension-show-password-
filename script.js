var inp = document.getElementsByTagName('input');

for (var i = 0; i < inp.length; i++) {
    if (inp[i].type == "password") {
        var InputPass = inp[i];

        var div = document.createElement('div');
        div.title = "Click For Show Password";
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.background = "url(" + browser.extension.getURL("eye.png") + ")";
        div.style.backgroundSize = "cover";
        div.style.color = "white";
        div.style.zIndex = "1";
        div.style.cursor = 'pointer';
        div.id = 'RpEye';

        InputPass.parentNode.insertBefore(div, InputPass.nextSibling);

        div.onclick = function() {
            if (InputPass.type == "text") {
                InputPass.type = "password";
            } else {
                InputPass.type = "text";
            }
        };
    }
}
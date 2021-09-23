window.onload = function () {
    document.querySelector("#excuse-button").addEventListener("click", () => {
        document.querySelector("#excuse-text").innerHTML = newExcuse();
    });
}

function newExcuse() {

    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let newExcuse = [who, action, what, when];
    let finalExcuse = "";

    for (let i = 0; i < newExcuse.length; i++) {
        finalExcuse = finalExcuse.concat(' ', newExcuse[i][Math.floor((Math.random() * newExcuse[i].length))]);
    }

    return finalExcuse
}


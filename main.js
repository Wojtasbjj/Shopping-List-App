const btn = document.getElementById("button");
    const item = document.getElementById("item");
    let number = 1;
    const add = function () {
        const div = document.createElement("div");
        div.textContent = item.value;
        document.getElementById("page").appendChild(div);
        console.log(item.value);
        if (document.getElementById("important").checked == true) {
            div.classList.toggle("important");
            console.log("ta rzecz jest ważna");
        }
        else {
            div.classList.toggle("normal");
            console.log("to normalna rzecz");
        }
            const cancel = function () {
                    div.classList.toggle("cancel")
                    console.log("powinno przekreślić");
                }
                div.addEventListener("click", cancel);
            
    }
    btn.addEventListener("click", add);
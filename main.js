    const btn = document.getElementById("button");
    const item = document.getElementById("item");
    const productList = [];
    const add = function () {
        const div = document.createElement("div");
        div.textContent = item.value;
        if (productList.includes(item.value)) {
            alert(`produkt ${item.value} jest już na liście!`);
            return;
        }
        productList.push(item.value);
        document.getElementById("page").appendChild(div);
        console.log(item.value);
        item.value = "";
        if (document.getElementById("important").checked == true) {
            div.classList.toggle("important");
            console.log("ta rzecz jest ważna");
        }
        else {
            div.classList.toggle("normal");
            console.log("to normalna rzecz");
        }
        important.checked = false;
        
            const cancel = function () {
                    div.classList.toggle("cancel")
                    console.log("obiekt został przekreślony");
                }
                div.addEventListener("click", cancel);

            const usuniecie = function () {
                document.getElementById("page").removeChild(div);
                console.log("obiekt został usunięty");
            }
                div.addEventListener("dblclick", usuniecie);
            
    }
    btn.addEventListener("click", add);
    const btn = document.getElementById("button");
    const item = document.getElementById("item");
    const productList = [];
    const add = function () {
        const div = document.createElement("div");
        div.textContent = item.value;
        for (let i=0; i <= productList.length; i++) {
            div.setAttribute('id', [i])
        };
        if (productList.includes(item.value)) {
            alert(`produkt ${item.value} jest już na liście!`);
            item.value = "";
            important.checked = false;
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

            const deleteItem = function (e) {
                document.getElementById("page").removeChild(div);
                const index = e.target.id;
                console.log(index);
                productList.splice(index, 1)
                console.log("obiekt został usunięty");
            }
                div.addEventListener("dblclick", deleteItem);
            
    }
    btn.addEventListener("click", add);
    const pItems = document.querySelectorAll("p"); //pobiera elementy p i tworzy obiekt tablicopodobny. Mozna też stworzyć tablicę za pomocą operatora rest [...document.getElementByTag]
    const instruction = document.getElementById('instruction');
    let flaga = true;
    const instructionReview = () => {
        if (flaga = true) {
        for (i=0; i<pItems.length; i++) {
            pItems[i].style.display = 'block';
            console.log('wyświetlam instrukcję');
        }
        flaga = false;
        }
        
    }


    instruction.addEventListener('click', instructionReview)
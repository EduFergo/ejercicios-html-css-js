const add_btn = document.getElementById("add");
const dlt_btn = document.getElementById("delete");
const input = document.getElementById("input");
const btns = document.getElementById("buttons");
const btns_cnt = document.getElementById("btn-container");
const img_container = document.querySelector(".img-container");


const position = input.value - 1;

const img = [
    { p: "0", src: "./img/right-arm.jpg" },
    { p: "1", src: "./img/exodia.jpg" },
    { p: "2", src: "./img/left-arm.jpg" },
    { p: "3", src: "./img/right-leg.jpg" },
    { p: "4", src: "./img/left-leg.jpg" }
];


add_btn.addEventListener("click", add_img);
dlt_btn.addEventListener("click", dlt_img);


function add_img() {
    remove_warning();
    let input_value = input.value;
    let container_length = img_container.children.length;

    if (input_value == "") {
        input_value = 1;
    }

    let is_valid = check_add_input(input_value, container_length);

    if (is_valid) {
        add_calc(input_value);
    } else {
        add_warning();
    }
}

function dlt_img() {
    remove_warning();
    let input_value = input.value;
    let container_length = img_container.children.length;

    if (input_value == "") {
        input_value = 1;
    }

    let is_valid = check_dlt_input(input_value, container_length);

    if (is_valid) {
        dlt_calc(input_value);
    } else {
        add_warning();
    }


}

function remove_warning() {
    const warning_rm = document.querySelector(".warning");
    if (warning_rm) {
        warning_rm.remove();
    }
}

function add_warning() {
    const warning = document.createElement("div");
    warning.classList.add("warning");
    warning.textContent = "No puede haber más de 5 cartas en el tablero";

    btns_cnt.insertBefore(warning, btns);

}

function check_dlt_input(input_value, container_length) {
    if (input_value > container_length) {
        return false;
    } else {
        return true;
    }
}


function check_add_input(input_value, container_length) {
    if (input_value > 5 - container_length) {
        return false;
    } else {
        return true;
    }
}

function add_calc(input_value) {

    for (let i = 0; i < input_value; i++) {
        let update_container_length = img_container.children.length;

        for (let j = 0; j <= update_container_length; j++) {
            let child = img_container.children[j];

            if (!child) {
                const img_add = document.createElement("img");
                img_add.src = img[j].src;
                img_add.classList.add("p" + img[j].p);
                img_container.appendChild(img_add);

            } else {
                let img_class = child.className;
                let img_num = img_class.charAt(1);
                let existing_img = img.find(item => item.p === img_num);
                if (!existing_img) {
                    const img_add = document.createElement("img");
                    img_add.src = img[j].src;
                    img_add.classList.add("p" + img[j].p);
                    img_container.appendChild(img_add);
                }
            }
        }
    }
}

function dlt_calc(input_value) {
    img_container.removeChild(img_container.children[input_value-1]);
}









const add_btn = document.getElementById("add");
const dlt_btn = document.getElementById("delete");
const input = document.getElementById("input");
const btns = document.getElementById("buttons");
const btns_cnt = document.getElementById("btn-container");
const img_container = document.querySelector(".img-container");

const img_src = [
    "./img/right-arm.jpg",
    "./img/exodia.jpg",
    "./img/left-arm.jpg",
    "./img/right-leg.jpg",
    "./img/left-leg.jpg"
];

add_btn.addEventListener("click", add_img);
dlt_btn.addEventListener("click", dlt_img);


function add_img(){
    remove_warning();
    const container_length = img_container.children.length;
    add_case(container_length);     
}

function dlt_img(){
    remove_warning();
    const position = input.value-1;
    const input_is_valid = check_input();
    if(input_is_valid){
        img_container.removeChild(img_container.children[position]); 
    }else{
        warning();
    }     
}

function remove_warning() {
    const warning_rm = document.querySelector(".warning");
    if (warning_rm) {
        warning_rm.remove();
    }
}

function warning(){
    const warning = document.createElement("div");
    warning.classList.add("warning");
    warning.textContent = "No se puede exceder el número de cartas";

    btns_cnt.insertBefore(warning , btns);

}

function check_input(){
    const input_value = input.value;
    if(input_value<0 || input_value > img_container.children.length){
        return false;
    } else{
        return true;
    }

}
function add_case(container_length){
    switch(container_length){
        case 0:
            const img_0 = document.createElement("img");
            img_0.classList.add("p1");
            img_0.src = img_src[container_length];
            img_container.appendChild(img_0);

            break;

        case 1:  
            const img_1_prev = img_container.children[0];
            const img_1 = document.createElement("img")

            img_1_prev.classList.contains("p1") ? img_1.classList.add("p2") : img_1.classList.add("p1");

            if(img_1.classList.contains("p2")){
                img_1.src = img_src[1];
                img_container.appendChild(img_1);

            }else{
                img_1.src = img_src[0];
                img_container.insertBefore(img_1, img_1_prev);
            }

            break;

            case 2:  
            const img_2_0 = img_container.children[0];
            const img_2_1 = img_container.children[1];
            const img_case_2 = document.createElement("img")

            if (img_2_0.classList.contains("p2") && img_2_1.classList.contains("p3")){
                img_case_2.classList.add("p1");
                img_case_2.src = img_src[0];
                img_container.insertBefore(img_case_2, img_2_0);

            } else if (img_2_0.classList.contains("p1") && img_2_1.classList.contains("p3")){
                img_case_2.classList.add("p2");
                img_case_2.src = img_src[1];
                img_container.insertBefore(img_case_2, img_2_1)

            } else {
                img_case_2.classList.add("p3");
                img_case_2.src = img_src[2];
                img_container.appendChild(img_case_2)

            }

            break;   

            case 3:  
            const img_3_0 = img_container.children[0];
            const img_3_1 = img_container.children[1];
            const img_3_2 = img_container.children[2];
            const img_case_3 = document.createElement("img")

            if(img_3_0.classList.contains("p2") && img_3_1.classList.contains("p3") && img_3_2.classList.contains("p4")){
                img_case_3.classList.add("p1");
                img_case_3.src = img_src[0];
                img_container.insertBefore(img_case_3, img_3_0);

            } else if(img_3_0.classList.contains("p1") && img_3_1.classList.contains("p3") && img_3_2.classList.contains("p4")){
                img_case_3.classList.add("p2");
                img_case_3.src = img_src[1];
                img_container.insertBefore(img_case_3, img_3_1);

            } else if(img_3_0.classList.contains("p1") && img_3_1.classList.contains("p2") && img_3_2.classList.contains("p4")){
                img_case_3.classList.add("p3");
                img_case_3.src = img_src[2];
                img_container.insertBefore(img_case_3, img_3_2);

            }else{
                img_case_3.classList.add("p4");
                img_case_3.src = img_src[3];
                img_container.appendChild(img_case_3);
            }

            break;   

            case 4:  
            const img_4_0 = img_container.children[0];
            const img_4_1 = img_container.children[1];
            const img_4_2 = img_container.children[2];
            const img_4_3 = img_container.children[3];
            const img_case_4 = document.createElement("img")

            if(img_4_0.classList.contains("p2") && img_4_1.classList.contains("p3") && img_4_2.classList.contains("p4") && img_4_3.classList.contains("p5")){
                img_case_4.classList.add("p1");
                img_case_4.src = img_src[0];
                img_container.insertBefore(img_case_4, img_4_0);

            } else if(img_4_0.classList.contains("p1") && img_4_1.classList.contains("p3") && img_4_2.classList.contains("p4") && img_4_3.classList.contains("p5")){
                img_case_4.classList.add("p2");
                img_case_4.src = img_src[1];
                img_container.insertBefore(img_case_4, img_4_1);

            } else if(img_4_0.classList.contains("p1") && img_4_1.classList.contains("p2") && img_4_2.classList.contains("p4") && img_4_3.classList.contains("p5")){
                img_case_4.classList.add("p3");
                img_case_4.src = img_src[2];
                img_container.insertBefore(img_case_4, img_4_2);

            }else if(img_4_0.classList.contains("p1") && img_4_1.classList.contains("p2") && img_4_2.classList.contains("p3") && img_4_3.classList.contains("p5")){
                img_case_4.classList.add("p4");
                img_case_4.src = img_src[3];
                img_container.insertBefore(img_case_4, img_4_3);

            }else{
                img_case_4.classList.add("p5");
                img_case_4.src = img_src[4];
                img_container.appendChild(img_case_4);
            }

            break;   

    }   
}
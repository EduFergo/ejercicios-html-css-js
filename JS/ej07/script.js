const form = document.getElementById("dataForm");
form.addEventListener('submit', get_data);

let users = JSON.parse(localStorage.getItem('users')) || [];
let counter = JSON.parse(localStorage.getItem('users_counter')) || [];

function get_data(event){

    event.preventDefault();

    const user = {
        id: counter,
        name: form.name.value,
        surname: form.surname.value,
        address: {
            street_type: form.street_type.value,
            street_name: form.street_name.value,
            postal_code: form.postal_code.value,
            city: form.city.value,
            region: form.region.value,
            country: form.country.value
        },
        birthday: form.birthday.value,
        gpa: form.gpa.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value,
        country: form.country.value,
        account: form.account.value,
        about_me: form.about_me.value
    };

    console.log(user);
    counter++;
    localStorage.setItem('users_counter', JSON.stringify(counter));

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

}



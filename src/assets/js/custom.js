const form = document.querySelector('.form');

const url = 'https://api.byteplex.info/api/test/contact/';

const onSubmit = (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message }),
    };

    if (name === "" || email === "" || message === "") {
        alert('Fill the form!')
    } else {
        fetch(url, options).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }).then(data => {
            console.log(data);
            alert('Message is sended');
        }).catch(error => alert(`${error.message}`));
    };
    
    form.reset();
};

form.addEventListener('submit', onSubmit)
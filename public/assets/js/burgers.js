
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded')
    }



    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                name: document.getElementById('burger-name').value.trim(),
                devoured: document.getElementById('devoured-btn').value
            };
            console.log(newBurger)

            fetch('/api/burgers', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(newBurger), 
            }).then(() => {
                document.getElementById('burger-name').value = '';
                console.log('Created new burger');
                location.reload();
            })
        })
    }

    const devourItBtn = document.querySelectorAll('.change-devour')

    if(devourItBtn) {
        devourItBtn.forEach(button => {
            button.addEventListener('click', e => {
                const id = e.target.getAttribute('data-id')

                const newDevouredState = {
                    devoured: true
                }
                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newDevouredState)
                }).then(response => {
                    console.log(response)
                    if (response.ok) {
                        console.log(`changed devoured to: ${newDevouredState}`)
                        location.reload('/')
                    }
                })
            })
        })
    }


})
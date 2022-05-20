
document.getElementById('loginForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    const loginUrl = 'http://ginjar.tech/api/login';
    let email = document.getElementById('userEmail').value;
    let password = String(document.getElementById('userPassword').value);

    const formData = { email, password}
    console.log(formData)
    fetch(loginUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
            console.log(data);
            if(!data.success){
                document.getElementById('alert').classList.remove('j-d-none');
                email = password = "";
            } else {
                sessionStorage.setItem('login', JSON.stringify(formData))
                location.href = "../dashboard/dashboard.html"
            }
        }).catch(error => {
            console.error('Error:', error)
            document.getElementById('alert-2').classList.remove('j-d-none');
        })
})

//close alert
document.getElementById('close')
    .addEventListener('click', ()=>{
        document.getElementById('alert').classList.add('j-d-none');
    })

//close alert-2
document.getElementById('close-alert-2')
.addEventListener('click', ()=>{
    document.getElementById('alert-2').classList.add('j-d-none');
})
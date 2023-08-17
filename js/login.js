document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value
    const passField = document.getElementById('user-password');
    const password = passField.value
   if(email === 'yousuf152003@gmail.com' && password === 'forlearn'){
        window.location.href = 'index2.html'
   }else {
   alert('দূর বেড়া পাসওয়ার্ড ভুলে গেছো');
   }
})
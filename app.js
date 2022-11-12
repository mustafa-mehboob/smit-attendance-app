
// let signupBtn = () => {
//     Swal.fire({
//         title: 'Signup',
//         html: `<input type="text" id="signin" class="swal2-input" placeholder="Username">
//         <input type="password" id="password" class="swal2-input" placeholder="Password">
//         `,
//         confirmButtonText: '<button class="main-signin" onclick="signupBtnMain(signin, password)">Sign in</button>',
//         focusConfirm: false,
//         preConfirm: () => {
//             const signin = Swal.getPopup().querySelector('#signin').value
//             const password = Swal.getPopup().querySelector('#password').value
//             if (!signin || !password) {
//                 Swal.showValidationMessage(`Please enter signin and password`)
//             }
//             return { signin: signin, password: password }
//         }
//     }).then((result) => {
//         const emailValue = result.value.signin;
//         const passwordValue = result.value.password;
//         value(emailValue, passwordValue )
//         return {emailValue, passwordValue}
//     })
    
// }
// let  value = async (emailValue, passwordValue) => {
//     let email = await emailValue;
//     let password = await passwordValue;
//     console.log(await email);
//     console.log(await password);
//     return email, password
// }











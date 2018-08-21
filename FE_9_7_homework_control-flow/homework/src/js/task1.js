let Login = prompt('Enter your login here','');
if (!Login) {
    alert('Canceled');
} else if (Login.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols');
} else if (Login !== 'User') {
    alert('I don’t know you');
} else {
    let Password = prompt('Enter your password here', '');
    if (!Password) {
        alert('Canceled');
    } else if (Password !== 'SuperUser') {
        alert('Wrong password');
    } else {
        if (new Date().getHours() > 20.00) {
            alert('Good evening!');
        } else {
            alert('Good day!');
        }
    }
}
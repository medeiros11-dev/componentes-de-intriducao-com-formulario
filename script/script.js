const form = document.querySelector('.caixas form');
const inputs = document.querySelectorAll('.caixas form input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputs.forEach(input=>{
		if (!input.value) {
			input.parentElement.classList.add('on');
		} else {
			input.parentElement.classList.remove('on');
			if (input.type == 'email') {
				if (isValidEmail(input.value)) {
					input.parentElement.classList.remove('on');
				} else {
					input.parentElement.classList.add('on');
				}
			}
		}
	});
});
function isValidEmail( value ) {
	return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test( value );
}

console.log( isValidEmail("mymail@mydomain.com") )
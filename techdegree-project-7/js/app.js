
const alert = document.querySelector('.alert');
const xButton = document.querySelector('.x');
const message = document.querySelector('.message');
const sendResponse = document.querySelector('.send-response');
const sendButton = document.querySelector('.send');
const inputMessage = document.querySelector('.message-input');
const textarea = document.querySelector('textarea');
const widget = document.querySelector('.widget');
const widget2 = document.querySelector('.widget2');
const switchOn = document.querySelector('.on');
const switchOff = document.querySelector('.off');
const switchOn2 = document.querySelector('.on2');
const switchOff2 = document.querySelector('.off2');


xButton.addEventListener('click', () => {
	alert.style.display = 'none';
});

sendButton.addEventListener('click', () => {
	if (inputMessage.value === '' || textarea.value === ''){
		message.textContent = 'Please put a message! Reload the page.';
		message.style.backgroundColor = 'firebrick';
		message.style.color = '#fff';
		message.style.padding = '130px 0';
	} else{
		message.textContent = 'Your message has been sent!';
		message.style.backgroundColor = 'gold';
		message.style.padding = '130px 0';
	}
});

widget.addEventListener('click', (e) => {
	if (e.target.className === 'off'){
		switchOn.style.backgroundColor = '#fff';
		switchOn.style.borderRadius = '33%';
		switchOff.style.backgroundColor = 'unset';
	} else {
		switchOff.style.backgroundColor = '#fff';
		switchOff.style.borderRadius = '33%';
		switchOn.style.backgroundColor = 'unset';
	}
});

widget2.addEventListener('click', (e) => {
	if (e.target.className === 'off2'){
		switchOn2.style.backgroundColor = '#fff';
		switchOn2.style.borderRadius = '33%';
		switchOff2.style.backgroundColor = 'unset';
	} else {
		switchOff2.style.backgroundColor = '#fff';
		switchOff2.style.borderRadius = '33%';
		switchOn2.style.backgroundColor = 'unset';
	}
});
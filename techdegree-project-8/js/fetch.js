

const container = document.getElementById('container');
const ul = document.querySelector('.grid');
const modal = document.getElementById('simpleModal');
const closeButton = document.querySelector('.closeBtn');
let modalContent = document.querySelector('.modalContent');
let modalAll = '';

// ===========================================
// FETCH DATA
// ===========================================

function fetchData(url){
	return fetch(url)
		.then(checkStatus)
		.then(res => res.json())
		.catch(error => console.log('Looks like there was a problem!', error))
}

// We used promise all even when we're only fetching one data to have more flexibility
// in terms of what to do with the data fetched and conditions on the website.

Promise.all([
	fetchData('https://randomuser.me/api/?results=12')
])
.then(data => {
	const cards = data[0].results;

	generateCard(cards);
	modalFill(cards);

	container.addEventListener('click', (e) => {
	e.preventDefault(); // To prevent the page from loading every time we click a card
	const cardContent = document.querySelectorAll('.image-link');
	// console.log(cardContent);

	const modals = document.querySelectorAll('.modalContent');
	// console.log(modals);	

	const wrapper = document.querySelectorAll('.wrapper');

	// console.log(e.target);

	for(let i = 0; i < cardContent.length; i++){
		if(e.target === cardContent[i]){
			modalContent.innerHTML = modals[0].children[i].innerHTML;  // Here we traversed the DOM by logging on the console
			modal.style.display = 'block';							   // to know where is its path to display it on the modal
		}
	}
	});
})

// ===========================================
// HELPER FUNCTIONS
// ===========================================

function checkStatus(response){
	if(response.ok){
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

function generateCard(data){
	const card = data.map( item => [`
		<li class="card">
			<a href="#" class="image-link">
				<img class="image" src='${item.picture.medium}' alt>
				<span class="description"><strong class="strong">${item.name.first} ${item.name.last}</strong> <br> ${item.email} <br> ${item.location.city}</span>
			</a>
		</li>
	`]).join('');
	ul.innerHTML = card;
}

function modalFill(data){
	modalAll += data.map(item => `
			<div class="wrapper">
				<img class="image modal-image" src='${item.picture.large}' alt="${item.name.first} ${item.name.last}">
				<div class="description2">
					<p class="top"><strong class="strong">${item.name.first} ${item.name.last}</strong></p>
					<p class="middle">${item.email}</p>
					<p class="bottom">${item.location.city}</p>
				</div>
				<div class="description3">
					<p>${item.cell}</p> 
					<p>${item.location.street},  ${item.location.state}  ${item.location.postcode}</p>
					<p>Birthday: ${item.dob.date} </p>
				</div>
			</div>
	`).join('');
	modalContent.innerHTML = modalAll;
}

// ===========================================
// EVENT LISTENERS
// ===========================================

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
	modalContent.innerHTML = modalAll; // We did this to set the innerHTML of the modal to normal, so we could loop and traverse 
});									   // through it again and search for the event's target up top to display it on the modal.

window.addEventListener('click', (e) => {
	if (e.target === modal){
		modal.style.display = 'none';
		modalContent.innerHTML = modalAll;
	}
});





var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quotes = ["You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.", "Life is 10% what happens to me and 90% of how I react to it.", "The only way to do great work is to love what you do.", " Whether you think you can or you think you can’t, you’re right.", "It is never too late to be what you might have been.", "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "Winning isn’t everything, but wanting to win is.", "Certain things catch your eye, but pursue only those that capture the heart.", "We must balance conspicuous consumption with conscious capitalism."];
var authors = ["Unknown", "Charles Swindoll", "Steve Jobs", "Henry Ford", "George Eliot", "John Lennon", "Vince Lombardi", "Ancient Indian Proverb", "Kevin Kruse"];
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
function getRandomNumbers() {
	return Math.floor(Math.random() * quotes.length);
}
function newquote() {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	document.getElementById("text").style.color = colors[randomNumber];
	document.getElementById("author").style.color = colors[randomNumber];
	document.getElementById("new-quote").style.backgroundColor = colors[randomNumber];
	document.getElementById("tweet-quote").style.backgroundColor = colors[randomNumber];
	const randomNumbers = getRandomNumbers();
	console.log(randomNumbers);
	document.getElementById("text").textContent = '"' + quotes[randomNumbers] + '"';
	document.getElementById("author").textContent = '-' + authors[randomNumbers];
}
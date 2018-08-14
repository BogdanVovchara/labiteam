	const username = document.querySelector('.rss-form input[type="text"]'),
	    submit = document.querySelector('.rss-form input[type="submit"]'),
	    url = `https://www.pinterest.com/${username.value}/feed.rss/`,
	    xhr = new XMLHttpRequest();
	submit.addEventListener('submit', callName);

	function callName() {
	    xhr.open('GET', 'url', true);
	    xhr.send();
	};
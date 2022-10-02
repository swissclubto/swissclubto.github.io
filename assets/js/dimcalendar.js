if (/\/events\/\d{4}\/$/.test(window.location.href)) {
	window.addEventListener("load", highlightCalendar);
}

function highlightCalendar() {
	let now = new Date();
	let curYear = now.getFullYear();
	let pageYear = getPageYear();

	if (pageYear > curYear) return;

	if (pageYear < curYear) {
		dimAllMonths();
		return;
	}

	dimPastMonthsAndHighlightCurrent(now);
}

function getPageYear() {
	let title = document.getElementById("page-title");

	return title.textContent.trim().split(" ")[0];
}

function dimAllMonths() {
	for (let i = 1; i <= 12; ++i) dimAllEventsOfMonth(i);
}

function dimAllEventsOfMonth(month) {
	let monthDiv = document.getElementById(`month${month}`);
	dimMonthNameAndBorder(monthDiv);

	let events = monthDiv.getElementsByTagName("tr");
	[...events].forEach(dimEvent);
}

function dimMonthNameAndBorder(monthDiv) {
	monthDiv.classList.add("dim");
	let monthName = monthDiv.firstElementChild;
	monthName.classList.add("dim");
}

function dimEvent(event, idx) {
	if (idx % 2) event.classList.add("dim");
	let [dayCell, eventLinkCell] = event.children;
	dayCell.classList.add("dim");
	eventLinkCell.firstElementChild.classList.add("dim");
}

function dimPastMonthsAndHighlightCurrent(now) {
	let curMonth = now.getMonth() + 1;
	let curDay = now.getDate();

	for (let i = 1; i < curMonth; ++i) dimAllEventsOfMonth(i);
	highlightCurrentMonth(curMonth, curDay);
}

function highlightCurrentMonth(month, curDay) {
	let monthDiv = document.getElementById(`month${month}`);
	monthDiv.classList.add("current");

	let events = [...monthDiv.getElementsByTagName("tr")];
	dimPastEvents(events, curDay);

	let today = events.find(event => event.children[0].textContent == curDay);
	if (today == undefined) return;

	highlightDay(today);
}

function dimPastEvents(events, curDay) {
	events
		.filter(event => event.children[0].textContent < curDay)
		.forEach(dimEvent);
}

function highlightDay(dayRow) {
	dayRow.classList.add("current");
}

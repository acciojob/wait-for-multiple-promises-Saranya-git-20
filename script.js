const tableBody = document.getElementById('output');
const loading = document.getElementByID('loading');
const promise=[
	createPromise(1),
	createPromise(2),
    createPromise(3)
]
function createPromise(index){
	const time = Math.floor(Math.random() * 3) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({ index: index, time: time });
		},time * 1000)
	})
}

Promise.all(promise).then((result)=>{
	loading.textContent = ""; 
	 let totalTime = 0;
	result.forEach((result) =>{
		totalTime += result.time;
		const row = document.createElement('tr');
		const namecell = document.createElement('td')
		namecell.textContent = `Promise ${result.index}`;

		const timecell = document.createElement('td')
		timecell.textContent = result.time

		row.appendChild(namecell);
		row.appendChild(timecell);
	    tableBody.appendChild(row);
	})
	 const totalRow = document.createElement('tr');
	const total = document.createElement('td')
	total.textContent = "Total";

	const totalvalue = document.createElement('td')
	totalvalue.textContent = totalTime

	totalRow.appendChild(total);
	totalRow.appendChild(totalvalue);
	tableBody.appendChild(totalRow);
})
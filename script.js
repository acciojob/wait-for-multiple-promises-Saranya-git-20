const tableBody = document.getElementById('output');
const promise=[
	createPromise(2),
	createPromise(1),
    createPromise(3)
]
function createPromise(index) {
  const time = (Math.random() * 2 + 1).toFixed(3);
  return new Promise((resolve) => {
    setTimeout(() => {
       resolve({ index, time: parseFloat(time) });
    }, time * 1000);
  });
}

Promise.all(promise).then((result)=>{
	 const loadingRow = document.getElementById('loading');
	if (loadingRow) loadingRow.remove();
	  let maxTime = 0;
	result.forEach(({index,time}) =>{
		const row = document.createElement('tr');
		const namecell = document.createElement('td')
		namecell.textContent = `Promise ${index}`;

		const timecell = document.createElement('td')
		timecell.textContent =time.toFixed(3);

		row.appendChild(namecell);
		row.appendChild(timecell);
	    tableBody.appendChild(row);
		if (time > maxTime) maxTime = time;
	})
	 const totalRow = document.createElement('tr');
	const total = document.createElement('td')
	total.textContent = "Total";

	const totalvalue = document.createElement('td')
	totalvalue.textContent = maxTime.toFixed(3);

	totalRow.appendChild(total);
	totalRow.appendChild(totalvalue);
	tableBody.appendChild(totalRow);
})
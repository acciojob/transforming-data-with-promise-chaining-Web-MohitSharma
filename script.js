//your JS code here. If required.
let number = document.getElementById("ip");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", function (){
	let num = number.value;

	new Promise((resolve , reject)=>{
		setTimeout(()=>{
			output.innerHTML = `Result: ${num}`
			resolve(num)
		},2000)
	}).then((num)=>{
		return new Promise((resolve , reject)=>{
			setTimeout(()=>{
				output.innerHTML = `Result: ${num*2}`
				resolve(num*2)
			})
		})
	}).then((num)=>{
		return new Promise((resolve , reject)=>{
			setTimeout(()=>{
				output.innerHTML = `Result: ${num-3}`
				resolve(num-3)
			})
		})
	}).then((num)=>{
		return new Promise((resolve , reject)=>{
			setTimeout(()=>{
				output.innerHTML = `Result: ${num/2}`
				resolve(num/2)
			})
		})
	}).then((num)=>{
		return new Promise((resolve , reject)=>{
			setTimeout(()=>{
				output.innerHTML = `Final Result: ${num + 10}`
				resolve(num + 10)
			})
		})
	})
})
const answer = input => {
	let s = input.split(" ");
	let result = [];
	for(let i = s.length - 1; i > -1; i --){
		if(s[i].trim()){
			result.push(s[i]);
		}
	}
	return result.join(" ");
}
// for test `the sky is blue`
console.log(answer("the sky is blue"));
// for test `  hello world!  `
console.log(answer("  hello world!  "));
// for test `a good   example`
console.log(answer("a good   example"));

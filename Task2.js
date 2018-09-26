 let phrase="How To Price a Forest, and Other Economics Problems";
 let arr = (phrase.split(''));
 for (let i = 2; i < arr.length; i=i+3)
 {
	arr[i]='Y';
 }
  let phraseNew = arr.join('')
	console.log(phraseNew);
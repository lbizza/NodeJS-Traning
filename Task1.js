	var word = "bon";
	var arr1 = (word.split(''));
	var arr2 = (word.split('').reverse());
	var str1 = arr1.join('');
	var str2 = arr2.join('');
        if (str1==str2)
	{
	console.log("The word is a palindrome");
	} else {
	console.log("The word is not a palindrome");
	}
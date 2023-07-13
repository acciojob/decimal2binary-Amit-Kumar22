function decimalToBinary(a) {
  //Write you code here
	var binary = '';
  while (a>0)
   {
binary = (a%2) + binary;
    a = Math.floor(a/2);
     }
return binary;
}

window.decimalToBinary = decimalToBinary;

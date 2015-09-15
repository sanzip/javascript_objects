// Question 1

function question1(){		
		var array = [1,2,3,4,5,6,7,8,9,10];
		document.write(array+"<br>");
		var n = prompt("Pass the parameter n: ");
		last(array,n);
}
function last(a,n){		
		var i=0;
		var reverseArray = a.reverse();
		document.write("The return element is ");
		for(i=0;i<n;i++){
			if(i==n-1){
				document.write(reverseArray[i]+".");	
			}
			else{
				document.write(reverseArray[i]+", ");	
			}
		}	
		}			


//Question 2

function question2(){		
		var string=["JavaScript","is","cool"];
		var JointSting = string.join();
		document.write("Result is <b>"+JointSting+"</b>");		
	}
	
//Question 3

function question3(){		
		var array = [1,2,3,4,5,6,7];
		document.write("The element in array are:" +array);
		var n = Number(prompt("Enter the element to remove:"));
		
		remove_array_element(array,n);
	}
	function remove_array_element(array,n){		
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<br>you selected item"+n);
		document.write("<br>After Removing Final elements in array are: "+array+"<br>");
	}
	
	
//Question 4

function question4(){
		var email = prompt("Enter your email: ");
		var length = email.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your protected email address is <br> "+email[0]+email[1]+email[2]+email[3]+email[4]);
		for(i = 5; i<length;i++){
			if(email[i] === '@'){
				for(j=i;j<length;j++){
					document.write(email[j]);
				}
				break;	
			}
			document.write(".");	
		}		
		
	}
	
//Question 5
function question5(){
		var string = prompt("Enter any string: ");
		document.write("The string you entered is "+string+"<br>");
		var repeatTime = prompt("Enter number of repetition: ");
		repeat(string,repeatTime);
	}
	
	function repeat(string,repeatTime){
		document.write("the repeated string ");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(string+" ");
		}
		
	}
	
//Question 6
function question6(){
		var array = "JavaScript is Cool ";
		document.write("Given string is " +array); 		
		var string = prompt("Enter any string to add to given string: ");
		var Index = prompt("Enter index to add: ");
		insert_string(array,string,Index);
	}
	
	function insert_string(array,string,Index){
		insertString  = string+" ";
		document.write("<br>Final string is:"+array.substring(0,Index-1)+string+array.substring(Index-1));
	}
	
//Question 7
function question7(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		document.write("Month number: "+month+"<br>");
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("Month is January.");
				break;
			case 2:
				document.write("Month is February.");
				break;
			case 3:
				document.write("Month is March.");
				break;
			case 4:
				document.write("Month is April.");
				break;
			case 5:
				document.write("Month is May.");
				break;
			case 6:
				document.write("Month is June");
				break;
			case 7:
				document.write("Month is July.");
				break;
			case 8:
				document.write("Month is August.");
				break;
			case 9:
				document.write("Month is September.");
				break;
			case 10:
				document.write("Month is October.");
				break;
			case 11:
				document.write("Month is November.");
				break;
			case 12:
				document.write("Month is December.");
				break;
		}
		
	}
	
//Question 8
function question8(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The day is :"+date+"<br><hr>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The day before was :"+date);
	}


//Question 9
function question9(){
	
		var input = prompt("Enter a character: ");
		check_alpha(input);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("It is alphanumeric character.");
		}
		else{
			document.write("It is not  alphanumeric character.");
		}
	}


//Question 10
function question10(){	
		
		var input = prompt("Enter a character: ");
		check(input);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("It is  uppercase character.");
		}
		else if(input>='a' && input<='z')
		{
			document.write("It is lowercase character.");
		}
		else{
			document.write("Invalid character");
		}
	}


//Question 11
function question11(){		
		var input = prompt("Enter a string: ");
		Count(input);
	}

	function Count(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("The number of vowels in the given string is <b>"+counter+"</b>.");
	}
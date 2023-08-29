```
 function calculate(num1, num2, method) {
    if (method === "sum") {
       var result = num1 + num2;
       console.log(result);
    } else if (method === "sub") {
       var result = num1 - num2;
       console.log(result);
    } else if (method === "multi") {
       var result = num1 * num2;
       console.log(result);
    } else if (method === "divide") {
       var result = num1 / num2;
       console.log(result);
    } else {
       console.log("Unknown Method, Try Again");
    }
 }

calculate(8 , 2 ,"sum");    
calculate(8 , 2 ,"sub");    
calculate(8 , 2 ,"multi");  
calculate(8 , 2 ,"divide"); 
calculate(8 , 2 ,"unknown"); 
```


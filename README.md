# Etch-a-Sketch-Odin
Etch-a-Sketch Project

I learned a few things from this lesson as follows:

#1 A user's input to a prompt returns as a string. To convert it to a number you can use the Nubmer() function

#2 NaN stands for Not a Number and is a global property representation. You can use the isNan() function to determine if a variable is Not a Number. If it is not, the output will return true, otherwise false. 

The !isNaN(result): By adding the "!" before isNaN(result), the result is inverted. So, if isNaN(result) returns true, !isNaN(result) will be false, and vice versa.

#3 When you need to update global variables based on user input without resorting to "shadowing," you can directly modify the global variables within the function without declaring them with let, const, or var. By accessing the global variables without redeclaration, you can update their values from within the local scope 
without creating new local variables.

 In JavaScript, if you declare a variable with the same name inside a local scope (e.g., inside a function or block), it creates a new local variable that "shadows" the global variable with the same name. The local variable takes precedence over the global variable within that scope.
However, modifying the local variable does not affect the value of the global variable. They are separate entities with different values.

#4 The remove() method removes the element from the DOM. 


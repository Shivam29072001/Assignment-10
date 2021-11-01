var x = 1;//GLOBAL VARIABLE
function button() {
    function display() {
        var y = 20;//LOCAL VARIABLE
        console.log("x+y = " + (x + y));
        console.log("For every clicking the variable x is incrementing by 1");
        alert("Inside a function display\n" + "value of x is: " + x + "\n" + "value of y is: " + y + "\n" + "value of x+y is: " + (x + y))
        x++;
    }
    display();
    console.log("Out of the display function y is not valid but x is\n");
    console.log("x = " + x);
    console.log("y = " + y);
}

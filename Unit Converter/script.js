function convert() {
    var inputValue = parseFloat(document.getElementById("input").value);
    var unit = document.getElementById("unit").value;
    var result;

    switch(unit) 
    {
        case "m":
            result = inputValue * 100; // Convert meter to centimeter
            document.getElementById("result").innerHTML = result + " cm";
            break;      
        case "cm":
            result = inputValue / 100; // Convert centimeter to meter
            document.getElementById("result").innerHTML = result + " m";
            break;
        case "l":
            result = inputValue / 1000; // Convert litre to kilolitre  
            document.getElementById("result").innerHTML = result + " kl";
            break; 
        case "kl":
            result = inputValue * 1000; // Convert kilolitre to litre 
            document.getElementById("result").innerHTML = result + "l";
            break;
        case "kg":
            result = inputValue * 1000; // Convert kilogram to gram 
            document.getElementById("result").innerHTML = result + "g";
            break;
        case "g":
            result = inputValue / 1000; // Convert gram to kilogram
            document.getElementById("result").innerHTML = result + "kg";
            break;          
        default:
            document.getElementById("result").innerHTML = "Invalid unit";
    }
}
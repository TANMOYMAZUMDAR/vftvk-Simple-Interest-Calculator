function compute()
{
   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("getamount").innerText=principal;
    document.getElementById("interest").innerText=rate;
    document.getElementById("res").innerText=interest;
    document.getElementById("calculate").innerText=year;
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

document.addEventListener('change',updateRate);
document.addEventListener('onclick',compute);

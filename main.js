a = "";

function submit()
{
    a = document.getElementById("chooseNo").value*2;
    document.getElementById('open_box').style.visibility = 'visible';
    document.getElementById('close_box').style.visibility = 'hidden';
    document.getElementById("two").innerHTML = a;
    setTimeout(() => { document.getElementById('open_box').style.visibility = 'hidden'; document.getElementById('close_box').style.visibility = 'visible';    document.getElementById("two").innerHTML = ""; }, 2000);

}

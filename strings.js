function strings()
{
    var string1 = document.getElementById("firststr").value;
    var string2 = document.getElementById("secondstr").value;

    var i = 0;
    var reversed = "";
    for (i = string1.length-1;i>=0; i--)
    {
        reversed += string1[i]; //reversed = reversed + string1[i]
    }

    if (reversed == string1)
    {
        document.getElementById("string info").innerHTML = "palindrome";
    }
    else
    {
        document.getElementById("string info").innerHTML = "not a palindrome";
    }
    //substring(a,b) a = starting position(index) b = length
    var sub1 = string1.substring(0,3);
    alert(sub1);

}
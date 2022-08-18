function App()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin" && password=="user")
{

    alert("Login succesfully");
    return false;
}
else
{
    alert("login failed");
}
}
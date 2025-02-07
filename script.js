async function fetchUserData(){
    try{
        const data = await fetch("https://randomuser.me/api/")
        const jsonify = await data.json();
        console.log(jsonify)
        console.log(jsonify.results[0].login.username)
        console.log(jsonify.results[0].email)
        document.getElementById("username").innerHTML = jsonify.results[0].login.username;
        document.getElementById("email").innerHTML = jsonify.results[0].email;
    }
    catch(err){
        console.log("Error fetching the data:",err);
        document.getElementById("username").innerHTML = "Failed to load the username";
        document.getElementById("email").innerHTML = "Failed to load the email";
    }
    
}
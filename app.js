
// selected required id's
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

// Action on btn click
btn.onclick = function(){
    const promise = new Promise((resolve,reject) =>{
        
        const request = new XMLHttpRequest;
        request.open("GET","https://jsonplaceholder.typicode.com/users");
        request.onload = () =>
        {
            if(request.status === 200) //200 means success
            {
                resolve(request.response);
            }
            else{
                reject(Error(request.statusText));
            }
        };
        request.onerror = () =>
        {
            reject(Error("Error fetching data"));
        }
        request.send();
    });
    promise.then((data) =>{
        console.log("Got data ! Promise Executed");
        const result = JSON.parse(data);
        //console.log(result);
        //msg.innerHTML = result;
        //if success 
        var player='<h2>Lists of Users</h2>';
        result.forEach(function(user)
         {
            player+=
            `<div class="player">
            <div class="strength">Name : ${user.name}</div>
            <div>Email   : ${user.email}</div>
            <div>Phone   : ${user.phone}</div>
            <div>Website : ${user.website}</div>
            <div>Company : ${user.company.name}</div>
            <div>City    : ${user.address.city}</div>
            <div>Zipcode : ${user.address.zipcode}</div>
            </div>`
        })
        msg.innerHTML = player; //for displaying data in ui
        
    },
    (error) =>{
        console.log("Promise Rejected");
        console.log(error.message);
    });
}


function viewUserData()
{
   
}
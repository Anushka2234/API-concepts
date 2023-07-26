console.log("Hello World")
// fetch("https:// {
    
//      .then(function(res){
//         console.log(res.json());
//      })
//      .then(function(data){
//         console.log(data);
//      })


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>console.log(data));

const data ={
    title:"This is title",
    body:"This is post body",
    userID: 2
}

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    body: JSON.stringify(data),
    headers:{
        "Content-type" :"application/json"
    }
}).then(res =>res.json())
  .then((data)=>console.log(data));
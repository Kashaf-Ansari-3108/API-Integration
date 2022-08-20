
let getUsers = ()=>{
  return new Promise((resolve,reject)=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((res) => (res.json()))
     .then((res) => (resolve(res)))
     .catch((err) => (reject(err)))
  })
}

let getPosts = ()=>{
    return new Promise((resolve,reject)=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((res) => (res.json()))
       .then((res) => (resolve(res)))
       .catch((err) => (reject(err)))
    })
}

const d = new Date();
const currentTime = d.toLocaleTimeString('en-US');
console.log(currentTime);

 
let colorArr = [];
let render = async ()=> {
  try{
  let users = await getUsers();
  let posts = await getPosts();
  console.log(users);
  console.log(posts);
  let html = '';
  for(i=0; i<users.length; i++){
    for(j=0; j<posts.length; j++){
      if (users[i].id == posts[j].userId){
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        colorArr.push(randomColor);
        console.log(colorArr);
        console.log(colorArr[0]);
    let htmlSegment = ` <main>
    <div class="wrapper">
        <div class="testimonials testimonial-1">
            <div style="background-color:${colorArr[j]};" class="card card-1" id="color">
                <div class="card-header">
                    <div class="card-img">
                        <img src="./img/img1.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-name">${users[i].name} (${users[i].username})</div>
                        <div class="card-name">${users[i].email}</div>
                        <div class="card-name">${currentTime}</div>
                        <div class= "card-status">${posts[j].title}</div>
                    </div>
                </div>
                <div class="card-body">“ ${posts[j].body} ”</div>
            </div>
            
        </div>
    </div>
</main>
`;
  
         html += htmlSegment;
         

      }
  }
}
  let container = document.getElementById('container');
  container.innerHTML = html;
}
 catch(err){
      console.log(err)
    }
}

render();

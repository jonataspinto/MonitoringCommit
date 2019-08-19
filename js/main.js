const req = ()=>{
    return fetch("https://api.github.com/repos/estartando-devs/select-court-sports/commits").then(res=> res.json()).then(res =>{
        console.log(res)
        console.log(res[1].commit)
        console.log(res[1].commit.message)
        mountCard(res)
    })
}

const mountCard = (content)=>{
    content.forEach(element => {
        console.log(element.commit)
        let date = new Date(element.commit.author.date)
        console.log(date.toLocaleString())
        let i = `
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${element.commit.message}</span>
                        <p> ${element.commit.author.name}</p>
                        <p> ${date.toLocaleString()}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    `
    document.getElementById('container').innerHTML += i
        
    });
}

// document.getElementById("getcmt").addEventListener("click", ()=>{
//     req()
// })
req()
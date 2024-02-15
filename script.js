let URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.getElementById("fact");

const btn = document.getElementById("btn");


let getFacts = async(req,res)=>{
    console.log("Getting Data.....")
    let response = await fetch(URL);
    console.log(response)
   let data = await response.json()
   factPara.innerText = data[0].text;
}

btn.addEventListener("click",getFacts)



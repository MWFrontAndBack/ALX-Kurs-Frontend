console.log("hej");
let details = document.querySelector("#details");
console.log(window.location.search);
let convert = (id)=>{
    let nums = id.match(/\d+/g);
    return nums;
};
const render = (appartament)=>{
    details.innerHTML = "";
    details.innerHTML += `
    <p>${appartament.title}<p/>
    <p>${appartament.description}<p/>
    <p>${appartament.price}<p/>

    `;
};
const appartmentId = convert(window.location.search);
fetch(`http://localhost:8000/apartments/${appartmentId}`).then((res)=>res.json()).then((aparment)=>render(aparment));

//# sourceMappingURL=details.275bda19.js.map

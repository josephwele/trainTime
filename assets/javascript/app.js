var trainName,destination,frequency;
document.getElementById("bnt").addEventListener("click",function(event){
    event.preventDefault();
     trainName = document.querySelector("#trainName").value;
    destination = document.querySelector("#destination").value;
     frequency = document.querySelector("#frequency").value;
    tableCreate(trainName,destination,frequency);

}
)
function tableCreate(t,d,f){
    console.log(d)
    //save the coming values into an array
    var arr = [t,d,f];
    //creat table row
    var tr = document.createElement("tr");
    //append tr into tbody
    var tbody = document.getElementById("tbody");
 
    //creat th and append it to the table row
    var th = document.createElement("th");
    tr.append(th);
    th.innerHTML = arr[0];
    // using for loop to create 4 tds
    for(let i = 1;i<5;i++){ 
        var cell = document.createElement("td");
        cell.innerHTML = arr[i];
        tr.appendChild(cell);
        

    }
    tbody.appendChild(tr);
}

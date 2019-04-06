const app = document.getElementById("app");

LoadAllEvents();

function LoadAllEvents(){
    document.addEventListener("DOMContentLoaded", loadRequest);
}

function loadRequest(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://blockchain.info/ticker", true);

    xhr.onload = function(){
        if(xhr.status === 200){
           const response = JSON.parse(xhr.responseText);
           let output = `
           <div class="row">
            <div class="col-auto">
                <h1 class="display-5 text-center">Currency Rates</h1>
            </div>
           </div>
           <div class="row">
           `
            for(let currency in response){
                //console.log(response[currency]);
                output += `
                <div class="col-auto">
                    <div class="card mb-5" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header text-center"><strong>${currency}</strong></li>
                            <li class="list-group-item ">Buy : ${response[currency].buy}</li>
                            <li class="list-group-item">Sell : ${response[currency].sell}</li>
                            <li class="list-group-item">Last : ${response[currency].last}</li>
                        </ul>
                    </div>
                    </div>
                `
            }
            `
            </div>
            `
            app.innerHTML = output;
        }
    }
    xhr.send();
}
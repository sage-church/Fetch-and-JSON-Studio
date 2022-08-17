// TODO: add code here
window.addEventListener("load", function() {

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        
        response.json().then(function(json) {

            console.log(json);

            let container = document.getElementById("container");

            json.sort(function(a, b) { return b.hoursInSpace - a.hoursInSpace });

            container.innerHTML += `<h3>Total astronaut count: ${json.length}</h3>`

            for (let i = 0; i < json.length; i++) {

                if (json[i].active) {

                    container.innerHTML += 
                    `<div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li style="color:green">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>`

                } else {

                    container.innerHTML += 
                    `<div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="isActive">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>`

                }

            }

        });

    });

});
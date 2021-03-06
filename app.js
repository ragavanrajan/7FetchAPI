document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);
// Get local text file data 
function getText() {
    // *********************
    // under the proto you could see "text" or "json".In our case "text". That return a promise too. so use one more then.
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;

        })
        .catch(err =>
            console.log('Error'));
}

// Get local json file data 
function getJson() {
    // *********************
    // under the proto you could see "text" or "json".In our case "text". That return a promise too. so use one more then.
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>`

            })
            document.getElementById('output').innerHTML = output;

        })
        .catch(err =>
            console.log('Error'));
}


// Get from External API
function getExternal() {
    // *********************
    // under the proto you could see "text" or "json".In our case "text". That return a promise too. so use one more then.
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`

            })
            document.getElementById('output').innerHTML = output;

        })
        .catch(err =>
            console.log('Error'));


}
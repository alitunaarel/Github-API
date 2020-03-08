

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}


function getData(e) {
    let username = nameInput.value.trim();

    if ( username === "") {
        alert("Lutfen gecerli bir kullanici adi girin");
    }
    else {
            github.getGithubData(username)
            .then(response =>{
                if(response.user.message === "Not Found"){
                    ui.showError("User can not be found");
                }
                else{
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched() {
    
}

function getAllSearched() {
    
}
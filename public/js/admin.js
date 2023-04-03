const $userList = $('#userList');
const BASE_URL = "http://localhost:3000";
const activeIconSrc ="./img/active.png";
const pendingIconSrc = "./img/pending.png";

function displayUsers(arr){

    for (let i=0; i < arr.length; i++){
        let user = document.createElement("li");
        statusIconSrc = (arr[i].state === "active") ? activeIconSrc : pendingIconSrc;
        user.innerHTML = 
            `<dl class="row">
                <dt class="col-sm-6 lead">${arr[i].firstName} ${arr[i].lastName}</dt>
                <dd class="col-sm-3">${arr[i].email}</dd>
                <dd class="col-sm-3">
                    <img src=${statusIconSrc} alt=${arr[i].state} style="width: 25px" />
                </dd>
            </dl>`;
        user.className = "list-group-item";
        $userList.append(user);
    }
}

async function fetchUsers(){
    try {
        let res = await axios.get(`${BASE_URL}/users`);
        displayUsers(res.data);
    } catch (err){
        console.log("Couldn't get users", err);
    }
}

fetchUsers();
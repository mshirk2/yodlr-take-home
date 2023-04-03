const $signupForm = $("#signup-form");
const $alertSuccess = $("#alert-success");
const $alertWarning = $("#alert-warning");
const BASE_URL = "http://localhost:3000";

async function signup(evt){
    evt.preventDefault();

    const firstName = $("#signup-firstName").val();
    const lastName = $("#signup-lastName").val();
    const email = $("#signup-email").val();

    try {
        let res = await axios.post(`${BASE_URL}/users`, 
            {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        );
    } catch (err){
        console.log("User signup error", err);
        $alertWarning.addClass("show");
    }
    $signupForm.trigger("reset");
    $alertSuccess.addClass("show");
}

$signupForm.on("submit", signup);
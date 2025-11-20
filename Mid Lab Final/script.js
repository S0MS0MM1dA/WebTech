let count = 0;
let virtual_count = 0;
let inperson_count = 0;
    
function handleSubmit()
{
    const full_name = document.getElementById("full_name").value;
    const user_email = document.getElementById("user_email").value;
    const company = document.getElementById("company")
    const att_visual = document.getElementById("att_visual");
    const att_inPerson = document.getElementById("att_inPerson");

    let valid = true;
            

    if (full_name == "" || !full_name) {
        const nameErr = document.getElementById("nameErr");
        nameErr.innerHTML = "Name can not be empty";
    } 
    else {
        const nameErr = document.getElementById("nameErr");
        nameErr.innerHTML = "";
        if (full_name.length < 6) {
                const nameErr = document.getElementById("nameErr");
                nameErr.innerHTML ="Name must be at least 6 characters long";
                valid = false;
            }
            if (full_name.length > 100 && full_name !== "") {
                const nameErr = document.getElementById("nameErr");
                nameErr.innerHTML = "Name cannot exceed 100 characters.";
                valid = false;
            }
    }

    if (user_email == "" || !user_email) {
        const emailErr = document.getElementById("emailErr");
        emailErr.innerHTML = "Email cannot be empty.";
        valid = false;
    } else {
        const emailErr = document.getElementById("emailErr");
        emailErr.innerHTML = "";

        const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(user_email)) {
            const emailErr = document.getElementById("emailErr");
            emailErr.innerHTML = "Please enter a valid email address.";
            valid = false;
        }
    }
    if(att_inPerson.checked || att_visual.checked){
        const attendanceErr = document.getElementById("attendance")
        attendanceErr.innerHTML = "";
    } else{
        const attendanceErr = document.getElementById("attendance")
        attendanceErr.innerHTML = "Please Select attendance type."
        valid = false;
    }
    
    if (valid) {
        count++;
        alert("Registration Successful!")

        if(att_inPerson.checked){
            inperson_count++;
        }
        if(att_visual.checked){
            virtual_count++;
        }
        document.getElementById("total_count").innerHTML = count;
        document.getElementById("virtual_count").innerHTML = virtual_count;
        document.getElementById("inperson_count").innerHTML = inperson_count;
    }
}

function toggleButton(){
    const panel = document.getElementById("event-div");
    const event_btn = document.getElementById("event_btn");

    if(panel.style.display == "none"){
        panel.style.display = "block";
        event_btn.innerHTML = "Hide Event Analytics";
    }
    else{
        panel.style.display = "none";
        event_btn.innerHTML = "Show Event Analytics";
    }
}
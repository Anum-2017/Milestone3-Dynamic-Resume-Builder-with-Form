var _a, _b;
// Add More Skills Logic
(_a = document.getElementById("add-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var firstSkillInput = document.querySelector("#skills-container input");
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
        alert("Please fill in the first skill before adding more.");
        return;
    }
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
    (_a = document.getElementById("skills-container")) === null || _a === void 0 ? void 0 : _a.appendChild(skillInput);
});
// Event Listener for "Generate Resume" button
(_b = document.getElementById("resume-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    if (!validateFormFields()) {
        return;
    }
    // Capture form data
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDate = document.getElementById("graduation-date").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    // Display other dynamic content
    document.getElementById("display-name").textContent = userName;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-date").textContent = graduationDate;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    // Handle Profile Picture
    var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("display-profile-pic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Collect and display skills
    var skillInputs = document.querySelectorAll("#skills-container input");
    var skills = [];
    skillInputs.forEach(function (input) {
        if (input.value.trim()) {
            skills.push(input.value);
        }
    });
    var displaySkills = document.getElementById("display-skill-list");
    if (displaySkills) {
        displaySkills.innerHTML = "";
        skills.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            displaySkills.appendChild(skillItem);
        });
    }
});
// Form Validation
function validateFormFields() {
    var isValid = true;
    var errorMessage = "";
    //capture Input Fields
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDate = document.getElementById("graduation-date").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    //validate user
    if (!userName) {
        isValid = false;
        errorMessage += "Name is required.\n";
    }
    //validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errorMessage += "Valid email is required.\n";
    }
    //validate user degree
    if (!degree) {
        isValid = false;
        errorMessage += "Degree is required.\n";
    }
    //validate institution
    if (!institution) {
        isValid = false;
        errorMessage += "Institution is required.\n";
    }
    //validate date
    if (!graduationDate) {
        isValid = false;
        errorMessage += "Graduation year is required.\n";
    }
    //validate job title
    if (!jobTitle) {
        isValid = false;
        errorMessage += "Job Title is required.\n";
    }
    //validate company
    if (!company) {
        isValid = false;
        errorMessage += "Company is required.\n";
    }
    //validate start date
    if (!startDate) {
        isValid = false;
        errorMessage += "Start date is required.\n";
    }
    //validate end date
    if (!endDate) {
        isValid = false;
        errorMessage += "End date is required.\n";
    }
    //validate skills 
    var skillInputs = document.querySelectorAll("#skills-container input");
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
        isValid = false;
        errorMessage += "At least one skill is required.\n";
    }
    //check if there is error show alert
    if (errorMessage) {
        alert(errorMessage);
    }
    //otherwise return ture and generate form
    return isValid;
}
;

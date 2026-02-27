let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let editIndex = null;

window.onload = function () {
    displayJobs();
};

// SECTION SWITCH
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        alert("Login Successful");
        showSection("dashboard");
    } else {
        alert("Enter valid credentials");
    }
}

// ADD OR UPDATE JOB
function addOrUpdateJob() {
    let title = document.getElementById("jobTitle").value.trim();
    let company = document.getElementById("companyName").value.trim();

    if (!title || !company) {
        alert("Please fill all fields");
        return;
    }

    if (editIndex === null) {
        jobs.push({ title, company });
    } else {
        jobs[editIndex] = { title, company };
        editIndex = null;
    }

    localStorage.setItem("jobs", JSON.stringify(jobs));
    displayJobs();

    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
}

// DISPLAY JOBS
function displayJobs() {
    let homeList = document.getElementById("jobList");
    let dashList = document.getElementById("dashboardJobs");

    homeList.innerHTML = "";
    dashList.innerHTML = "";

    jobs.forEach((job, index) => {
        let card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <button class="update-btn" onclick="editJob(${index})">Update</button>
            <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
        `;

        homeList.appendChild(card.cloneNode(true));
        dashList.appendChild(card);
    });
}

// DELETE
function deleteJob(index) {
    jobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    displayJobs();
}

// EDIT
function editJob(index) {
    document.getElementById("jobTitle").value = jobs[index].title;
    document.getElementById("companyName").value = jobs[index].company;
    showSection("dashboard");
    editIndex = index;
}

// SEARCH FUNCTION
function searchJobs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll("#jobList .job-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// CLEAR SEARCH
function clearSearch() {
    document.getElementById("searchInput").value = "";
    searchJobs();
}

// RESUME UPLOAD
function uploadResume() {
    let file = document.getElementById("resume").files[0];
    if (file) {
        alert("Resume Uploaded: " + file.name);
    } else {
        alert("Please select a file");
    }
}

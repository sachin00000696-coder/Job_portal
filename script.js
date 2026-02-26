console.log(companyName);
var companyName = "Easy2Job";

const jobs = [
    { title: "HTML Developer", salary: 15000 },
    { title: "Java Developer", salary: 30000 },
    { title: "Python Developer", salary: 28000 }
];

const titles = jobs.map(function(job) {
    return job.title;
});
console.log("Job Titles:", titles);

const highSalary = jobs.filter(function(job) {
    return job.salary > 20000;
});
console.log("High Salary Jobs:", highSalary);

function applyJob() {
    return new Promise(function(resolve, reject) {
        let success = true;

        setTimeout(function() {
            if (success) {
                resolve("Job Applied Successfully");
            } else {
                reject("Application Failed");
            }
        }, 2000);
    });
}

applyJob()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

async function applyWithAsync() {
    try {
        let result = await applyJob();
        console.log("Using Async/Await:", result);
    } catch (error) {
        console.log(error);
    }
}

applyWithAsync();

const user = {
    name: "Sachin",
    greet: function(city) {
        console.log("Hello " + this.name + " from " + city);
    }
};

const anotherUser = { name: "Saksham" };

user.greet.call(anotherUser, "Chandigarh");

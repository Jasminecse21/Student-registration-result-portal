document
    .getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        // Get student details

        let name =
            document.getElementById("studentName").value.trim();

        let registerNo =
            document.getElementById("registerNo").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let phone =
            document.getElementById("phone").value.trim();

        let department =
            document.getElementById("department").value;

        let course =
            document.getElementById("course").value;


        // Get marks

        let html =
            Number(document.getElementById("htmlMark").value);

        let bootstrap =
            Number(document.getElementById("bootstrapMark").value);

        let javascript =
            Number(document.getElementById("javascriptMark").value);


        // Validate marks

        if (
            html < 0 || html > 100 ||
            bootstrap < 0 || bootstrap > 100 ||
            javascript < 0 || javascript > 100
        ) {

            alert("Please enter marks between 0 and 100.");

            return;
        }


        // Calculate total

        let total =
            html + bootstrap + javascript;


        // Calculate percentage

        let percentage =
            (total / 300) * 100;


        // Determine Pass / Fail

        let result;

        if (
            html >= 40 &&
            bootstrap >= 40 &&
            javascript >= 40
        ) {

            result = "PASS";

        } else {

            result = "FAIL";

        }


        // Display student details

        document.getElementById("displayName").innerText =
            name;

        document.getElementById("displayRegister").innerText =
            registerNo;

        document.getElementById("displayEmail").innerText =
            email;

        document.getElementById("displayPhone").innerText =
            phone;

        document.getElementById("displayDepartment").innerText =
            department;

        document.getElementById("displayCourse").innerText =
            course;


        // Display subject marks

        document.getElementById("displayHTML").innerText =
            html;

        document.getElementById("displayBootstrap").innerText =
            bootstrap;

        document.getElementById("displayJavaScript").innerText =
            javascript;


        // Display total

        document.getElementById("totalMarks").innerText =
            total + " / 300";


        // Display percentage

        document.getElementById("percentage").innerText =
            percentage.toFixed(2) + "%";


        // Display Pass / Fail

        let status =
            document.getElementById("status");

        status.innerText = result;


        if (result === "PASS") {

            status.className = "pass";

        } else {

            status.className = "fail";

        }


        // Show result section

        document.getElementById("resultBox").style.display =
            "block";


        // Scroll to result

        document.getElementById("resultBox").scrollIntoView({
            behavior: "smooth"
        });

    });



/* Clear Result */

function clearResult() {

    document.getElementById("resultBox").style.display =
        "none";

}
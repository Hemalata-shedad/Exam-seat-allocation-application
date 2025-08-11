// to add available branches information for allotment

document.getElementById('addBranchButton').addEventListener('click', function () {
    const branchFields = document.getElementById('branchFields');

    // Create a new row for branch details
    const branchRow = document.createElement('div');
    branchRow.classList.add('branch', 'row');

    // Add dropdown and input fields for branch details, including the new field "Number of Students per Bench"
    branchRow.innerHTML = `
        <select name="branchCode[]">
            <option value="IS">Information Science</option>
            <option value="EC">Electronics and Communication</option>
            <option value="CS">Computer Science</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="DS">Data Science</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CV">Civil Engineering</option>
            <option value="CH">Chemical Engineering</option>
            <option value="BT">Biotechnology</option>
            <option value="EE">Electrical Engineering</option>
        </select>
        <input type="number" name="rooms[]" placeholder="Number of Rooms">
        <input type="number" name="benches[]" placeholder="Number of Benches">
        <input type="number" name="studentsPerBench[]" placeholder="No of Students per Bench">
        <button type="button" class="deleteBranchButton">Delete</button>
    `;

    // Append the new row to the form
    branchFields.appendChild(branchRow);

    // Add event listener to delete button
    branchRow.querySelector('.deleteBranchButton').addEventListener('click', function () {
        branchRow.remove();
    });
});


// Add event listener to delete button of the initial row
document.querySelector('.deleteBranchButton').addEventListener('click', function (event) {
    event.target.closest('.row').remove();
});



// Add functionality for "Add Branch and Number of Students"
document.getElementById('addStudentButton').addEventListener('click', function () {
    const studentFields = document.getElementById('studentFields');

    const studentRow = document.createElement('div');
    studentRow.classList.add('student', 'row');

    studentRow.innerHTML = `
        <select name="studentBranchCode[]">
            <option value="IS">Information Science</option>
            <option value="EC">Electronics and Communication</option>
            <option value="CS">Computer Science</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="DS">Data Science</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CV">Civil Engineering</option>
            <option value="CH">Chemical Engineering</option>
            <option value="BT">Biotechnology</option>
            <option value="EE">Electrical Engineering</option>
        </select>
        <input type="number" name="students[]" placeholder="Number of Students">
        <input type="number" name="yearOfAdmission[]" placeholder="Year of Admission (e.g., 2022)">
        <select name="collegeYear[]">
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
        </select>
        <button type="button" class="deleteStudentButton">Delete</button>
    `;

    studentFields.appendChild(studentRow);

    studentRow.querySelector('.deleteStudentButton').addEventListener('click', function () {
        studentRow.remove();
    });
});


// allotment starting point
document.getElementById('allotStudentsButton').addEventListener('click', function () {
    alert("Student allotment process initiated!");
    // Implement the allotment logic here
});


// back button funtion
document.getElementById('goBackButton').addEventListener('click', function () {
    window.location.href = "/html/index.html"; // Replace "home.html" with your actual home page file name or URL
});

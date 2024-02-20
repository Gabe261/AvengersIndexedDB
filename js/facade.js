/**
 * File Name : facade.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-01-30 : Created
 */

function addFriendEnemy() {
    // check the validation
    // if validation succeeds
    if (doValidate_frmAdd()) {

        // read inputs
        console.log('form is valid');

        const name = $("#txtNameAdd").val();
        const fullName = $("#txtFullNameAdd").val();
        const isFriend = $("#radFriendAdd").prop("checked");
        const dob = $("#txtDOBAdd").val();
        const friend = new Friend(name, fullName, isFriend, dob);

        // save to database
        Friends.insert(friend).then((data) => {
            alert(`Record added successfully : id: ${data}`);
        }).catch((e) => {
            console.log(e);
        });


    } else {
        // otherwise
        // show error message
        console.log('form is invalid')
    }
}

function testExtraValidation() {
    if (doValidate_frmExtra()) {
        console.log('extra form is valid');
    } else {
        console.log('form is invalid');
    }
}

function showCalculatedAge() {
    const dob = $("#txtDOBAdd").val();
    const age = getCurrentAge(dob);
    $("#txtAgeAdd").val(age);
}

function initializeDatabase() {
    createDatabase().then((data) => {
        console.log("Database created successfully");
    }).catch((e) => {
        console.log("Error in database creation");
    });
}
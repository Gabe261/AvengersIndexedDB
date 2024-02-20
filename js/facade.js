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

function showAllFriendEnemy() {
    Friends.selectAll().then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log(e);
    });
}

function showOneFriendEnemy() {
    const id = Number($("#txtId").val());
    Friends.select(id).then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log(e);
    });
}

function updateFriendEnemy() {
    const id = Number($("#txtId").val());
    const name = $("#txtNameModify").val();
    const fullName = $("#txtFullNameModify").val();
    const isFriend = $("#radFriendModify").prop("checked");
    const dob = $("#txtDOBModify").val();
    const friend = new Friend(name, fullName, isFriend, dob);
    //important
    friend.id = id;
    //------------------
    Friends.update(friend).then((data) => {
        console.log(data)
        alert("Record update successfully");
    }).catch((e) => {
        console.log(e);
    });
}

function deleteFriendEnemy() {
    const id = Number($("#txtId").val());
    Friends.delete(id).then((data) => {
        console.log(data);
        alert("Record deleted successfully");
    }).catch((e) => {
        console.log(e);
    });
}

function clearAllFriendEnemy() {
    const result = confirm("Do you really want to clear all data?");
    if (result) {
        Friends.deleteAll().then((data) => {
            console.log(data);
            alert("All records deleted successfully");
        }).catch((e) => {
            console.log(e);
        });
    }
}

function initializeDatabase() {
    createDatabase().then((data) => {
        console.log("Database created successfully");
    }).catch((e) => {
        console.log("Error in database creation");
    });
}
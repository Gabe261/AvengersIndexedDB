/**
 * File Name : util.js
 *
 * Revision History:
 *       Gabriel Siewert, 1/30/2024 : Created
 */


function getCurrentAge(dob) {
    let age = 0;
    const year = Number(dob.substr(0, 4));
    const month = Number(dob.substr(5, 2));
    const day = Number(dob.substr(8, 2));
    const today = new Date();
    age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }
    return age;
}

// var x = {
//     name: 'juhwan',
//     school: 'conestoga',
//     address: {
//         street: "asdf",
//         house: "asdfa"
//     }
// }


//https://jqueryvalidation.org/documentation
function doValidate_frmAdd() {
    const form = $("#frmAddFriendEnemy");
    form.validate({
        rules: {
            txtNameAdd: {
                required: true,
                minlength: 2
            },
            txtFullNameAdd: {
                required: true,
                rangelength: [2, 10]
            },
            txtDOBAdd: {
                required: true,
                agecheck: true
            }
        },
        messages: {
            txtNameAdd: {
                required: "You must provide name",
                minlength: "Name must be at least 2 chars long"
            },
            txtFullNameAdd: {
                required: "Full name is required",
                rangelength: "Full name must be 2-10 chars long"
            },
            txtDOBAdd: {
                required: "You must input DOB",
                agecheck: "Age must be at least 2 years"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod(
    "agecheck",
    function (value, element) {
        const age = getCurrentAge(value)
        if (age >= 2) {
            return true;
        }
        return false;
    },

    "2 year check"
);

function doValidate_frmExtra() {
    const form = $("#frmExtra");
    form.validate({
        rules: {
            txtPassword: {
                required: true,
                minlength: 8,
                passwordcheck: true
            },
            txtVerifyPassword: {
                required: true,
                equalTo: '#txtPassword'
            },
            txtEmail: {
                required: true,
                emailcheck: true
            },
            txtURL: {
                required: true,
                url: true
            }
        },
        messages: {
            txtPassword: {
                required: "Password is required",
                minlength: "Password must be at least 8 characters",
                passwordcheck: "Password must include 1 cap and 1 number"
            },
            txtVerifyPassword: {
                required: "You must re-enter password",
                equalTo: "Passwords do not match"
            },
            txtEmail: {
                required: "Email is required",
                emailcheck: "you must provide a conestoga email"
            },
            txtURL: {
                required: "URL is required",
                url: "Enter validURL"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod(
    "passwordcheck",
    function (value, element) {
        const regexp = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regexp.test(value);
    },
    "1 caps and 1 number check"
);

jQuery.validator.addMethod(
    "emailcheck",
    function (value, element) {
        const regexp = /^.+conestogac.on.ca$/;
        return this.optional(element) || regexp.test(value);
    },
    "conestoga email checker"
);
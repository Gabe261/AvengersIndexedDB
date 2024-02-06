/**
 * File Name : database.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-01-30 : Created
 */

var db;

const data = [
    {
        name: "alpha",
        fullName: "alpha alpha",
        ifFriend: true,
        dob: "2020-12-31"
    },
    {
        name: "beta",
        fullName: "beta beta",
        ifFriend: false,
        dob: "2020-04-25"
    },
    {
        name: "gamma",
        fullName: "gamma gamma",
        ifFriend: true,
        dob: "2020-10-04"
    },
]

function createDatabase() {

    return new Promise((resolve, reject) => {
        const request = indexedDB.open("AvengersDB", 1);

        request.onerror = (event) => {
            console.error("Error in creating database");
        }

        request.onsuccess = (event) => {
            console.log("onsuccess() called : AvengersDB successfully created!");
            db = event.target.result;
            resolve(db);
        }

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            console.log("onupgradeneeded() called");
            const friendsStore = db.createObjectStore("friends", {
                keyPath: "id",
                autoIncrement: true
            });

            data.forEach(item => {
                friendsStore.add(item);
            });
        }
    });
}

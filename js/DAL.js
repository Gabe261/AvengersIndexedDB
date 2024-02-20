/**
 * File Name : DAL.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-01-30 : Created
 *       Gabriel Siewert, 2024-02-20 : Added CRUD operations
 */

const Friends = {
    insert: function (friend) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["friends"], "readwrite");
            transaction.oncomplete = (event) => {
                console.log("Success: insert transaction successful");
            }
            transaction.onerror = (event) => console.log("Error: error in insert transaction " + event);

            const friendsStore = transaction.objectStore("friends");
            const req = friendsStore.add(friend);
            req.onsuccess = (event) => {
                // returns the key of newly add item
                console.log(`Success: friend added successfully ${event.target.result}`);
                resolve(event.target.result);
            }
            req.onerror = (event) => {
                console.log(`Error: error in add ${event}`);
                reject(event);
            }
        });
    },
    selectAll: function () {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["friends"], "readonly"); // Will be readonly if left empty
            transaction.oncomplete = (event) => {
                console.log("Success: selectAll transaction successful");
            }
            transaction.onerror = (event) => console.log("Error: error in selectAll transaction " + event);

            const friendsStore = transaction.objectStore("friends");
            const friendsCursor = friendsStore.openCursor();

            let friends = [];
            friendsCursor.onsuccess = (event) => {
                const cursor = event.target.result;
                // If the cursor is pointing to an object (will be the first object in db) it will push it to the friends array.
                // The cursor.continue line will then restart the if statement on the next object in the db.
                // If the next object is null it will go to the else block and resolve (return) the array of friends.
                if (cursor) {
                    friends.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(friends);
                }
            }
            friendsCursor.onerror = (event) => {
                reject(event);
            }
        });
    },
    select: function (id) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["friends"]);
            transaction.oncomplete = (event) => {
                console.log("Success: select transaction successful");
            }
            transaction.onerror = (event) => console.log("Error: error in select transaction " + event);

            const friendsStore = transaction.objectStore("friends");

            const req = friendsStore.get(id);

            req.onsuccess = (event) => {
                event.target.result ? resolve(event.target.result) : reject(null);
            }
            req.onerror = (event) => {
                console.log(`Error: error in select ${event}`);
                reject(event);
            }
        });
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["friends"], "readwrite");
            transaction.oncomplete = (event) => {
                console.log("Success: delete transaction successful");
            }
            transaction.onerror = (event) => console.log("Error: error in delete transaction " + event);

            const friendsStore = transaction.objectStore("friends");
            const req = friendsStore.delete(id);

            req.onsuccess = (event) => {
                console.log(`Success: friend deleted successfully ${event}`);
                resolve(event);
            }
            req.onerror = (event) => {
                console.log(`Error: error in delete ${event}`);
                reject(event);
            }
        });
    },
    update: function (friend) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["friends"], "readwrite");
            transaction.oncomplete = (event) => {
                console.log("Success: update transaction successful");
            }
            transaction.onerror = (event) => console.log("Error: error in update transaction " + event);

            const friendsStore = transaction.objectStore("friends");

            let data = friend;

            const req = friendsStore.put(data);
            req.onsuccess = (event) => {
                // returns the key of newly add item
                console.log(`Success: friend updated successfully ${event}`);
                resolve(event);
            }
            req.onerror = (event) => {
                console.log(`Error: error in update ${event}`);
                reject(event);
            }
        });
    }
}

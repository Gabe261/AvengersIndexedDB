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
    },
    select: function () {
    },
    delete: function () {
    },
    update: function () {
    }
}

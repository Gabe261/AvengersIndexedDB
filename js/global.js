/**
 * File Name : global.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-01-30 : Created
 */

function btnAdd_click() {
    addFriendEnemy();
}

function btnExtra_click() {
    testExtraValidation();
}

function btnCalculate_click() {
    showCalculatedAge();
}

function txtDOBAdd_change() {
    showCalculatedAge();
}

function btnCreateDatabase_click() {
    initializeDatabase();
}

function btnShowAll_click() {
    showAllFriendEnemy();
}

function btnShowOne_click() {
    showOneFriendEnemy();
}

function btnUpdate_click() {
    updateFriendEnemy();
}

function btnDelete_click() {
    deleteFriendEnemy();
}

function btnClearDatabase_click() {
    clearAllFriendEnemy();
}

function pageFriends_pageshow() {
    showAllFriendEnemy();
}

function pageDetail_pageShow() {
    showOneFriendEnemy();
}

function init() {
    console.log("DOM is ready");
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnExtra").on("click", btnExtra_click);
    $("#btnCalculate").on("click", btnCalculate_click);
    $("#txtDOBAdd").on("change", txtDOBAdd_change);
    $("#btnCreateDatabase").on("click", btnCreateDatabase_click);

    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnDelete").on("click", btnDelete_click);
    $("#btnClearDatabase").on("click", btnClearDatabase_click);

    // Debug events
    $("#btnShowAll").on("click", btnShowAll_click);
    $("#btnShowOne").on("click", btnShowOne_click);

    // Page show events
    $("#pageFriends").on("pageshow", pageFriends_pageshow);
    $("#pageDetail").on("pageshow", pageDetail_pageShow);
}

function initDB() {
    initializeDatabase();
}

$(document).ready(function () {
    init();
    initDB();
});
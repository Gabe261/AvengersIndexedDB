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

function init() {
    console.log("DOM is ready");
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnExtra").on("click", btnExtra_click);
    $("#btnCalculate").on("click", btnCalculate_click);
    $("#txtDOBAdd").on("change", txtDOBAdd_change);
    $("#btnCreateDatabase").on("click", btnCreateDatabase_click);
}

$(document).ready(function () {
    init();
});
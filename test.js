let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ):";
});

window.addEventListener("Focus", () => {
    document.title = docTitle;
});
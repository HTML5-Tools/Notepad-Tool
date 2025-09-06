const openFileBtn = document.querySelector("#openFileButton");
const saveFileBtn = document.querySelector("#saveFileButton");
const fileNameInput = document.querySelector("#fileNameInput");
const fileContent = document.querySelector("#fileContent");
openFileBtn.addEventListener("click", () => {
    const fileElem = document.createElement("input");
    fileElem.type = "file";
    fileElem.click();
    fileElem.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                fileContent.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });
});
saveFileBtn.addEventListener("click", () => {
    const str = fileContent.value;
    const blob = new Blob([str], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileNameInput.value || "Untitled";
    a.click();
    URL.revokeObjectURL(a.href);
    a.remove();
});
window.addEventListener("load", () => {
    const editor = TEXTEDITOR.document;
    editor.designMode = "on";

    boldBtn.addEventListener("click", () =>{
        editor.execCommand("Bold", false, null);
    }, false);

    italicBtn.addEventListener("click", () =>{
        editor.execCommand("Italic", false, null);
    }, false);

    underlineBtn.addEventListener("click", () =>{
        editor.execCommand("Underline", false, null);
    }, false);

    supBtn.addEventListener("click", () =>{
        editor.execCommand("Superscript", false, null);
    }, false);

    subBtn.addEventListener("click", () =>{
        editor.execCommand("Subscript", false, null);
    }, false);

    strikeBtn.addEventListener("click", () =>{
        editor.execCommand("Strikethrough", false, null);
    }, false);

    oderedListBtn.addEventListener("click", () =>{
        editor.execCommand("InsertOrderedList", false, null);
    }, false);

    unorderedListBtn.addEventListener("click", () =>{
        editor.execCommand("InsertUnOrderedList", false, null);
    }, false);

    fontColorBtn.addEventListener("change", (e) => {
        editor.execCommand("ForeColor", false, e.target.value);
    }, false);

    highlightBtn.addEventListener("change", (e) => {
        editor.execCommand("BackColor", false, e.target.value);
    }, false);

    fontSizeChanger.addEventListener("change", (e) => {
        editor.execCommand("FontSize", false, e.target.value);
    }, false)
    

}, false);
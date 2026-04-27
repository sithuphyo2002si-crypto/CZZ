function changeContent() {
    const title = document.getElementById("title");
    const text = document.getElementById("text");

    title.innerText = "你點到了！🎉";
    text.innerText = "這就是 JavaScript 的效果！";

    document.body.style.background = "#ff9a9e";
}
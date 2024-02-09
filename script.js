const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');
const copyBtn = document.getElementById('copy-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextArea = document.getElementById("shortenedUrl");
    fetch(apiUrl).then(response => response.text()).then(
        data => {
            shortenedUrlTextArea.value = data;
        }).catch(error => {
            shortenedUrlTextArea.value = "Erro! Não é possível encurtar a Url.";
        });
    resetCopy();

}

reloadBtn.addEventListener('click', () => {
    location.reload();
})

copyBtn.addEventListener('click', () => {
    shortenedUrlTextArea.select();
    document.execCommand('copy');
    copyBtn.style.background = "#000";
    copyBtn.style.color = "#fff";
    copyBtn.innerText = "Copiado!";

})

function resetCopy() {
    copyBtn.style.opacity = 1;
    copyBtn.style.background = "rgba(255, 255, 255, 0.15)";
    copyBtn.style.color = "#000";
    copyBtn.innerText = "Copiar";
}
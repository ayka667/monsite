document.addEventListener("DOMContentLoaded", function() {
    var fileListDiv = document.getElementById("fileList");

    fetchFilesList(); // Appel à la fonction pour récupérer la liste des fichiers

    function fetchFilesList() {
        fetch('file-list.json') // Récupère le fichier JSON contenant la liste des fichiers
            .then(response => response.json())
            .then(data => {
                data.forEach(function(file) {
                    var fileItem = document.createElement("div");
                    fileItem.classList.add("file-item");

                    var fileLink = document.createElement("a");
                    fileLink.href = "file/" + file;
                    fileLink.textContent = file;

                    fileItem.appendChild(fileLink);
                    fileListDiv.appendChild(fileItem);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des fichiers :', error);
            });
    }
});

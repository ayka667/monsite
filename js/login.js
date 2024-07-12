// Utilisateurs fictifs pour démonstration
var users = [
    { username: 'Ayka', password: 'Huillot711', files: ['file1.txt', 'file2.jpg'] },
    { username: 'Romeo', password: '21425FRAQW12/ASPPP42-', files: ['document.pdf', 'image.png'] },
    { username: 'Root', password: 'FASDF2135RFA//.,.,!', files: ['secret.docx', 'notes.txt'] }
];

function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Vérification des identifiants
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Stocker l'utilisateur authentifié dans sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
        window.location.href = 'site.html';
        return false;
    } else {
        alert('Identifiant ou mot de passe incorrect');
        return false;
    }
}

function checkFiles(username) {
    // Simulation de la vérification des fichiers pour l'utilisateur spécifié
    var currentUser = users.find(function(user) {
        return user.username === username;
    });

    if (currentUser) {
        // Afficher les fichiers de l'utilisateur dans la console (à remplacer par votre logique réelle)
        console.log('Fichiers de ' + currentUser.username + ':', currentUser.files);
    } else {
        console.log('Utilisateur non trouvé.');
    }
}

// Exemple d'utilisation de la fonction checkFiles
var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
if (currentUser) {
    checkFiles(currentUser.username);
}
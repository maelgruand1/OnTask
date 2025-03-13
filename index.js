document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('newTaskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('setting').addEventListener('click', openModal);
document.getElementById('close').addEventListener('click', closeModal);

// Fonction pour ouvrir le modal
function openModal() {
    const modal = document.getElementById('settings');
    modal.style.display = 'flex'; // Afficher le modal
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('settings');
    modal.style.display = 'none'; // Cacher le modal
}

function addTask() {
    const taskText = document.getElementById('newTaskInput').value;

    // Vérifier si le nom de la tâche est vide
    if (taskText.trim() === '') {
        alert("Erreur : Le nom de la tâche ne peut pas être vide.");
        console.error("Nom de la tâche vide");
        document.getElementById('newTaskInput').focus(); // Mettre le focus sur l'input
        return; // Empêcher l'ajout de la tâche
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    // Créer la structure de la tâche avec un bouton de coche
    const taskContent = document.createElement('div');
    taskContent.classList.add('taskContent');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskTextElement.style.textDecoration = 'line-through'; // Marquer comme complété
        } else {
            taskTextElement.style.textDecoration = 'none'; // Rétablir la tâche
        }
    });

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('taskText');
    taskTextElement.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskTextElement);

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    document.getElementById('newTaskInput').value = ''; // Clear input
}

function addUnavailableSections() {
    // Sélectionner tous les éléments li avec la classe 'indisponible'
    const unavailableItems = document.querySelectorAll("li.indisponible");

    // Ajouter l'événement 'click' à chaque élément
    unavailableItems.forEach(item => {
        item.addEventListener('click', () => {
            alert("Section indisponible");
        });
    });
}

// Appeler la fonction pour ajouter les événements lors du chargement ou d'un autre événement
addUnavailableSections();

const openBtn = document.querySelector('.cardAdd');
const closeBtn = document.querySelector('#close');
const mediaClose = document.getElementById('mediaClose')
const modal = document.querySelector('.modal');
const mediaModal = document.querySelector('.mediaModal')
const mquery = window.matchMedia("(max-width: 600px)");

openBtn.addEventListener('click', openModal)


function openModal() {
    if (mquery.matches) {
        openMediaModal()
    } else {
        modal.style.display = 'grid'
        mediaModal.style.display = 'none'
        document.querySelector('.homePage').style.display = 'none'
    }
};

closeBtn.addEventListener('click', closeModal);
mediaClose.addEventListener('click', closeModal);


function closeModal() {
    if (mquery.matches) {
        mediaModal.style.display = 'none'
    } else {
        modal.style.display = 'none'
    }
};

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});



function openMediaModal() {
    modal.style.display = 'none'
    mediaModal.style.display = 'block'
}

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('mediaModal')) {
        closeModal();
    }
});



let todo_modal = document.querySelector('.modal')
let form = document.getElementById("form");
let addTask = document.getElementById("submit")
let input = document.getElementById("content");
let desc = document.getElementById("description")
let due_date = document.getElementById("date");
let posts = document.querySelector(".toDoContainer");
let remove = document.getElementById('discard');
let toDoBg = document.querySelector('.toDo');
let progressBar = document.getElementById('progressResult');
let homePage = document.querySelector('.homePage')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation()
});


let formValidation = () => {
    if (input.value === "") {
        posts.innerHTML = "Post cannot be blank";
        alert("Please enter task title.");
    } else {
        posts.innerHTML = "";
        acceptData();
    }
};

let data = {};


let acceptData = () => {
    data.push({
        title: input.value,
        desciption: desc.value,
        dueDate: due_date.value,
    });


    localStorage.setItem("data", JSON.stringify(data));



    createPost();

};


let createPost = () => {
    posts.innerHTML = "";
    data.map((x, y) => {
        return (posts.innerHTML += `
        <div id=${y} class="task-card" draggable="true">
        <div class="task-title">
            <h3>${x.title}</h3>
        </div>
        <div class="task-desc"><span>${x.desciption}</span></div>
        <div class="due-date"><strong>Due Date:</strong>${x.dueDate}
            <div class="delete_editIcons">
                <i onClick="deleteTask(this); createTasks();" id="discard"
                    class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
                                
    `);

    });

    formReset();
};

let formReset = () => {
    input.value = "";
    desc.value = "";
    due_date.value = "";
};

let editTask = (e) => {
    let modal = document.querySelector('.modal');
    let selectedTask = e.parentElement;

    modal.style.display = 'grid';



    input.value = selectedTask.children[0].innerHTML;
    desc.value = selectedTask.children[1].innerHTML;
    data.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
    createPost(e);
};

let deleteTask = (e) => {
    e.parentElement.parentElement.parentElement.remove();

    data.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem("data", JSON.stringify(data));
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createPost();
})()

//-------------------------- media to do ------------------//

let todoMediaModal = document.querySelector('.mediaModal')
let mediaForm = document.querySelector(".form");
let mediaAddTask = document.querySelector(".submitTask")
let mediaInput = document.querySelector(".content");
let mediaDesc = document.querySelector(".description")
let mediaDueDate = document.querySelector(".date");
let mediaPosts = document.querySelector(".toDoContainer");

mediaForm.addEventListener("submit", (e) => {

    e.preventDefault();
    mediaFormValidation()
});


let mediaFormValidation = () => {
    if (mediaInput.value === "") {
        mediaPosts.innerHTML = "Post cannot be blank";
        alert("Please enter task title.");
    } else {
        posts.innerHTML = "";
        acceptMediaData();
    }
};

let mediaData = {};


let acceptMediaData = () => {
    mediaData.push({
        title: mediaInput.value,
        desciption: mediaDesc.value,
        dueDate: mediaDueDate.value,
    });


    localStorage.setItem("mediaData", JSON.stringify(mediaData));



    createMediaPost();

};


let createMediaPost = () => {
    mediaPosts.innerHTML = "";
    mediaData.map((x, y) => {
        return (posts.innerHTML += `
        <div id=${y} class="task-card" draggable="true">
        <div class="task-title">
            <h3>${x.title}</h3>
        </div>
        <div class="task-desc"><span>${x.desciption}</span></div>
        <div class="due-date"><strong>Due Date:</strong>${x.dueDate}
            <div class="delete_editIcons">
                <i onClick="deleteTask(this); createTasks();" id="discard"
                    class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
                                
    `);

    });

    formMediaReset();
};

let formMediaReset = () => {
    mediaInput.value = "";
    mediaDesc.value = "";
    mediaDueDate.value = "";
};

let editMediaTask = (e) => {
    let modal = document.querySelector('.mediaModal');
    let selectedTask = e.parentElement;

    modal.style.display = 'grid';



    input.value = selectedTask.children[0].innerHTML;
    desc.value = selectedTask.children[1].innerHTML;
    data.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
    createPost(e);
};

let deleteMediaTask = (e) => {
    e.parentElement.parentElement.parentElement.remove();

    medieData.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem("mediaData", JSON.stringify(mediaData));
};

(() => {
    mediaData = JSON.parse(localStorage.getItem("mediaData")) || [];
    createMediaPost();
})()








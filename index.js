let postsArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
    let html = "";
    for (let i = 0; i < postsArray.length; i++) {
        html += `
        <div class="blog-post">
            <h3>${postsArray[i].title}</h3>
            <p>${postsArray[i].body}</p>
            <button class="delete-btn" onclick="deletePost(${i})">Delete</button>
        </div>
        `;
    }
    document.getElementById("blog-list").innerHTML = html;
}

function deletePost(index) {
    postsArray.splice(index, 1);
    renderPosts();
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;
    const data = {
        title: postTitle,
        body: postBody,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((post) => {
            postsArray.unshift(post);
            renderPosts();
            form.reset();
        });
});
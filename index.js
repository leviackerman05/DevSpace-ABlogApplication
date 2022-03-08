fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 10);
    let html = " ";
    for (post of postsArr)
      html += `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr />
    `;
    document.getElementById("blog-list").innerHTML = html;
  });

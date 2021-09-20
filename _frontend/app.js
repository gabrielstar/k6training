const $ = document;
registerEvents();

function registerEvents() {
    $.addEventListener('DOMContentLoaded', displayPosts);
    $.addEventListener('DOMContentLoaded', resetContent);
}

function displayPosts(e) {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())//return posts
        .then(posts => {
            console.log(posts);
            let html = '';
            posts.forEach(post => {
                html += `<li>${post.title}</li>`
            })
            $.getElementById('container').innerHTML = `<ul>${html}</ul>`;
        })
        .catch(error => {
            console.log(error);
        })
}

function resetContent(e) {
    setTimeout(() => {
        $.getElementById('container').innerHTML = '<p>Reset</p>'
    }, 3000)
}

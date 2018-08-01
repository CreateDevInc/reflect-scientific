if (/releases.html$/.test(window.location.href)) {

    const apiURL = "http://localhost/reflect-annoucements/wp-json/wp/v2/posts";

    const postContainer = document.getElementsByClassName('post-container')[0];
    

    const ajax = new XMLHttpRequest();

    ajax.open('GET', apiURL);
    ajax.responseType = "json";

    ajax.onload = () => {
        
        for (let i = 0; i < ajax.response.length; i++) {
            if (postContainer.firstChild.id == "placeholder") {
                postContainer.removeChild(postContainer.firstChild);
            }
            const aResponse = ajax.response[i];

            const post = document.createElement('div');
            postContainer.append(post);
            post.classList.add('post');
            post.appendChild(document.createElement('h2'));
            post.appendChild(document.createElement('h3'));
            post.appendChild(document.createElement('div'));

            const title = post.childNodes[0];
            const dateField = post.childNodes[1];
            const content = post.childNodes[2];
            
            title.textContent = aResponse.title.rendered;
            dateField.textContent = aResponse.date;
            content.innerHTML = aResponse.excerpt.rendered;

            

        }
        

    }

    ajax.send();

    

    

    



}








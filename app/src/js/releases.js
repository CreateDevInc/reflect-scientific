if (/releases.html$/.test(window.location.href)) {

    const apiURL = "http://localhost/reflect-annoucements/wp-json/wp/v2/posts";

    const postContainer = document.getElementsByClassName('post-container')[0];
    
    const ajax = new XMLHttpRequest();

    ajax.open('GET', apiURL);
    ajax.responseType = "json";

    ajax.onload = () => {
        let postArr = [];
        for (let i = 0; i < ajax.response.length; i++) {
            
            const aResponse = ajax.response[i];

            const title = aResponse.title.rendered;
            const dateField = new Date(aResponse.date);
            const content = aResponse.excerpt.rendered;
            const post = document.createElement('div');
            post.classList.add('hidden-post', 'post');
            post.innerHTML =`
            <div> 
                <h2>${title}</h2>
                <h3>${new Intl.DateTimeFormat('en-US').format(dateField)}</h3>
                <div>${content}</div>
            </div>
            `;
            postContainer.append(post);
            postArr.push(post);
            
        }
        const fadeEach = (arr) => {
            if (arr.length > 0) {
                setTimeout(() => {
                    arr.shift().classList.remove('hidden-post');
                    fadeEach(arr);
                }, 700);
            }
        }
        fadeEach(postArr);
        
    }

    ajax.send();

    

    

    



}








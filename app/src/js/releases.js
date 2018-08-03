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

            const content = document.createElement('div');
            content.classList.add('exerpt-limit');
            content.id = 'content' + i;
            content.innerHTML = aResponse.content.rendered;
            

            //read more button and function
            function handleClick(index) {
                if (document.getElementById('button' + index).textContent == "Read More") {
                    document.getElementById('content' + index).classList.remove('exerpt-limit');
                    document.getElementById('fade' + index).classList.remove('fade-out-div');
                    document.getElementById('button' + index).textContent = "Show Less";
                } else {
                    document.getElementById('content' + index).classList.add('exerpt-limit');
                    document.getElementById('fade' + index).classList.add('fade-out-div');
                    document.getElementById('button' + index).textContent = "Read More";
                }
                
            }

            const readMore = document.createElement('a');
            readMore.classList.add('read-more-btn');
            readMore.id = 'button' + i;
            readMore.textContent = "Read More";
            
            
            
            
            
            const post = document.createElement('div');
            post.classList.add('hidden-post', 'post');
            post.innerHTML =`
            <div class='relative-container'> 
                <h2>${title}</h2>
                <h3>${new Intl.DateTimeFormat('en-US').format(dateField)}</h3>
                <div>${content.outerHTML}</div>
                <div class='fade-out-div' id='fade${i}'></div>
                ${readMore.outerHTML}
            </div>
            `;
            
            postContainer.append(post);
            document.getElementById('button' + i).addEventListener('click', function() {
                handleClick(i);
            });
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








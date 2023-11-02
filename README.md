Wynk Clone
-
hosting Link-https://652d3f64c02bca13c6d765a0--precious-begonia-a2951c.netlify.app/


Project Overview
-
This project is an Music Player focused on enhancing React.js skills and adhering to best practices in UI development. It replicates the core features of Music , a popular Wynk platform.

Features
-
-Home Page and Featured Content: Browse and discover featured content on the home page.

-Music Interaction: View and interact with like and playing.

-Album Interaction: View and interact with Music ,Artist and playing.

-Authentication: Connect to a server for user registration and login.


Tech Stack
-

-HTML

-CSS

-JavaScript

-React

Credits
-
-Icons from React and Material UI.

-The project is designed to be fully responsive.

Project Context
-
The Wynk Clone project aims to create an application that mirrors the core functionalities of wynk, a widely-used playin music platform. 

APIs Used
-
To fetch data, the following APIs have been used: projectID:ym36gw00it6q

Login:
-
fetch('https://academics.newtonschool.co/api/v1/user/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'user_email',
        password: 'user_password',
        appType: 'music',
    })
})

Signup:
-
fetch('https://academics.newtonschool.co/api/v1/user/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user_name',
        email: 'user_email',
        password: 'user_password',
        appType: 'music',
    })
})



Get list of music:
-
fetch('https://academics.newtonschool.co/api/v1/music/song', {
    headers:
        'projectId': 'YOUR_PROJECT_ID'
    }
})

Get list of albums:
-
fetch('https://academics.newtonschool.co/api/v1/music/album', {
    headers: {
        'projectId': 'YOUR_PROJECT_ID'
    }
})

You can use the below search API or the filter API for searching:
-
fetch('https://academics.newtonschool.co/api/v1/music/song?search={"title":"search_term_here"}', {
    headers: {
        'projectID': 'YOUR_PROJECT_ID'
    }
})

Get album using id:
-
fetch('https://academics.newtonschool.co/api/v1/music/album/:id', {
    headers: {
        'projectId': 'YOUR_PROJECT_ID'
    }
})

Get artist using id:
-
fetch('https://academics.newtonschool.co/api/v1/music/artist/:id', {
    headers: {
        'projectId': 'YOUR_PROJECT_ID'
    }
})

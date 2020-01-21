const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(data) {
    const htmlString =
    `<!DOCTYPE html>
    <html lang="en-us">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>profileGenerator</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/v4-shims.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            
            <style>
                @page {
                    margin: 0;
                }
                *,
                *::after,
                *::before {
                box-sizing: border-box;
                }
                html, body {
                padding: 0;
                margin: 0;
                }
                html, body, .wrapper {
                height: 100%;
                }
                .wrapper {
                background-color: ${colors[data.userColor].wrapperBackground};
                padding-top: 200px;
                }
                body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
                padding-top: 50px;
                }
                main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
                }
                h1, h2, h3, h4, h5, h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
                text-align: center;
                }
                h1 {
                font-size: 3em;
                color: #ffffff;
                }
                h2 {
                font-size: 2.5em;
                }
                h3 {
                font-size: 1.5em;
                color: #ffffff;
                }
                h4 {
                font-size: 1.5em;
                text-align: justify;
                }
                h5 {
                font-size: 1.3em;
                }
                h6 {
                font-size: 1.2em;
                }
                .photo-header {
                position: relative;
                margin: 0 auto;
                margin-top: 30px;
                margin-bottom: -50px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: ${colors[data.userColor].headerBackground};
                color: ${colors[data.userColor].headerColor};
                padding: 10px;
                width: 95%;
                border-radius: 6px;
                }
                .photo-header img {
                width: 250px;
                height: 250px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: -75px;
                border: 6px solid ${colors[data.userColor].photoBorderColor};
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
                margin-bottom:2px;
                }
                .photo-header h1, .photo-header h2 {
                width: 100%;
                text-align: center;
                }
                .photo-header h1 {
                margin-top: 10px;
                }
                .links-nav {
                width: 100%;
                text-align: center;
                padding: 20px 0;
                font-size: 1.1em;
                }
                .nav-link {
                display: inline-block;
                margin: 5px 10px;
                padding-left: 0;
                color: #ffffff;
                font-size: 1.5em;
                text-decoration: none;
                }
                .workExp-date {
                font-style: italic;
                font-size: .7em;
                text-align: right;
                margin-top: 10px;
                }
                .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
                }

                .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
                }

                .card {
                padding: 20px;
                border-radius: 6px;
                background-color: ${colors[data.userColor].headerBackground};
                color: ${colors[data.userColor].headerColor};
                margin: 20px;
                }
                
                .col {
                flex: 1;
                text-align: center;
                }

                a, a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
                }

                .bioBrief {
                margin: 0 auto;
                width: 750px;
                }
    
                .fa {
                color: #ffffff;
                font-size: 1.5em;
                }

                i {
                color: #ffffff;
                font-size: 1.5em;
                }

                @media print { 
                body { 
                    zoom: .75; 
                } 
                }
            </style>
        </head>
        <body>
            <section id="mainContent">
                <div class="container wrapper">
                    <!-- row01 -->
                    <div class="row">
                        <div class="col-md-12 photo-header">
                            <img src=${data.avatar_url} alt="Vegeta" class="img-fluid photo-header img">
                            <div class="col-md-12">
                                <h1><b>Hi!</b></h1>
                                <h1><b>My name is ${data.name}!</b></h1>
                                <h3><b>Currently @ Trilogy Education Services</b></h3>
                                <div class='links-nav'>
                                    <i class="fab fa fa-map-marker"></i><a class='nav-link' href="http://maps.google.com/maps?q=+${data.location}" target='_blank'>
                                        ${data.location}
                                    </a>
                                    <i class="fab fa fa-github"></i><a class='nav-link' href=${data.html_url} target='_blank'>
                                        GitHub
                                    </a>
                                    <i class="fab fa fa-blog"></i><a class='nav-link' href=${data.blog} target='_blank'>
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ​
                    <!-- row02 -->
                    <div class="row">
                        <div class="bioBrief">
                            <h4> ${data.bio}
                            </h4>
                        </div>
                    </div>

                    <!-- row03 -->
                    <div class="row">
                        <div class="col-sm-12 col-md-5 card">
                            <h3><b>Public Repositories</b></h3>
                            <h3><b>${data.public_repos}</b></h3>
                        </div>
                        <div class="col-sm-12 col-md-5 card">
                            <h3><b>Followers</b></h3>
                            <h3><b>${data.followers}</b></h3>
                        </div>
                    </div>

                    <!-- row04 -->
                    <div class="row">
                        <div class="col-sm-12 col-md-5 card">
                            <h3><b>GitHub Stars</b></h3>
                            <h3><b>${data.totalStars}</b></h3>
                        </div>
                        <div class="col-sm-12 col-md-5 card">
                            <h3><b>Following</b></h3>
                            <h3><b>${data.following}</b></h3>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </html>`
    return htmlString;
}

module.exports = generateHTML;
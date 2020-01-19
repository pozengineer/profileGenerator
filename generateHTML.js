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


const generateTrial = () => {
    const htmlString =
    `<html lang=“en”>
        <head>
            <meta charset=“UTF-8" />
            <title>Document</title>
        </head>
        <body>
            <div class=“container”>
                <h2>Basic Table</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
            </div>
        </body>
    </html>`;
    return htmlString;
}

function generateHTML(data, response) {
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
                background-color: ${colors[data].wrapperBackground};
                padding-top: 100px;
                }
                body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
                }
                main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
                }
                h1, h2, h3, h4, h5, h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
                }
                h1 {
                font-size: 3em;
                }
                h2 {
                font-size: 2.5em;
                }
                h3 {
                font-size: 2em;
                }
                h4 {
                font-size: 1.5em;
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
                margin-bottom: -50px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: ${colors[data].headerBackground};
                color: ${colors[data].headerColor};
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
                border: 6px solid ${colors[data].photoBorderColor};
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
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
                background-color: ${colors[data].headerBackground};
                color: ${colors[data].headerColor};
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

                @media print { 
                body { 
                    zoom: .75; 
                } 
                }
            </style>
        </head>
        <body>
            <section id="mainContent">
                <div class="container">
                    <!-- row01 -->
                    <div class="row">
                        <div class="col-md-12">
                            <h1><b>About Me</b></h1>
                            <hr>
                        </div>
                    </div>
                    ​
                    <!-- row02 -->
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <img src="assets/images/Vegeta01.jpg" alt="Vegeta" class="img-fluid">
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-9">
                            <p> A highly motivated and hardworking individual, who is seeking a challenging role as an
                                entry-level
                                full stack web developer with your Company. My education in full stack web development at the
                                University of Sydney, and self-taught knowledge and experience combined with my interest,
                                passion
                                and enjoyment in coding, programming, Cloud Computing and Virtualisation, will enable me to
                                learn,
                                contribute and excel in the Web Development Industry. My ability to learn new coding languages
                                and programs enables me to understand coding concepts quickly which can then be transferred and
                                utilised in developing user friendly web-based applications using html, css, javaScript,
                                bootstrap, jQuery, API's and many more coding languages and concepts.
                            </p>
                        </div>
                    </div>
                </section>
        </body>
    </html>`;
    return htmlString;
}

module.exports = generateHTML;
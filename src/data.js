let sites = [
    {
        id: 1,
        title: 'STREET ARTIST',
        url: 'https://danielada-street-artist.netlify.app/',
        desc: 'Street Artist is a project that aims to create a platform for the street artists that allows advertising their masterpieces, selling their items on auction and tracking their income. This project has two parts the first one is for the artists, where they can add/ edit their items and track their income, and the second one is for visitor where they can see the published items, and also there is an auction page for selling the items.',
        tech: 'HTML, CSS and JavaScript',
    },
    {
        id: 2,
        title: 'BRAINSTER LABS',
        url: 'https://danieladam-brainster-labs.netlify.app/',
        desc: 'Brainster Labs is a project that contains all the projects made by the students from the Brainster academies of marketing, design and programming. The index page initially displays a total of 20 cards, 10 for programming, 4 for design and 6 for marketing. On mouseover the cards it should be increased. Above the cards are 3 buttons (checkboxes/radio buttons) for filtering the cards. When visitors press the "hire our student" button student employment form should be loaded.',
        tech: 'HTML and Bootstrap',
    },
    {
        id: 3,
        title: 'CAR RACING GAME',
        url: 'https://danieladam-car-rasing-game.netlify.app/',
        desc: 'This challenge is a mini Car racing game. When clicking the "Race!" button the game starts and when clicking the "Start over" button the game resets. The cars must go to the very end of the racetrack. When one of the cars reaches the end, the racetrack gets darken and a finish flag appears with an animation on top of the racetrack. Also, while the race is in progress, the buttons on top should be disabled and you cannot click on any of the buttons until the race finishes. The bottom section of the page, below the racetrack, should display results for every race.',
        tech: 'HTML, Bootstrap and jQuery',
    },
    {
        id: 4,
        title: 'BOOKMARKS APP',
        url: 'https://danieladam-bookmarks-app.netlify.app/',
        desc: 'This challenge is a mini app for books. In the table we render the books from an array of objects. Iterating through the array we make a list with the book title and book author. Also there is a list with book status, and if the book was read the text should be in green color, and if not, in red color. In the table of the books next to every book, there is a progress bar with the percentage of the pages that were read. Under the table, there is also a form to add a new object and after clicking submit, the object should be automatically added to the table together with the progress bar.',
        tech: 'HTML, CSS and JavaScript',
    },
    {
        id: 5,
        title: 'BUDGET APP',
        url: 'https://danieladam-budget-app.netlify.app/',
        desc: 'This Challenge is a budget calculator app.  When the first form is submitted it should update the Budget field & the Balance field at the same time. Entering an empty value in the input, should output an error message that should disappear when focusing the input again. When the second form is submitted it should update the Expenses field & the Balance field at the same time, and also a table is created. Within the table there are delete and edit icon that are used for deleting and editing the expense items.',
        tech: 'HTML, Bootstrap and JavaScript (and jQuery)',
    },
    {
        id: 6,
        title: 'MINI PROJECT',
        url: 'https://danieladam-mini-project.netlify.app/',
        desc: 'This challenge is a mini project with five fully responsive pages. The Homepage slider has modified indicators. Clicking on the play icon above “See What We Do”, opens a modal with a video in it. After that, there is a gallery where you can open every image in its full size in a modal by clicking on it. On the About page, the circled image has to be in the given position. On this page also, above the footer, there is a slider only with text, which doesn’t have indicators, only arrows. The hamburger icon on the menu must work, but only from mobile devices. The homepage slider text disappears on mobile devices.',
        tech: 'HTML and Bootstrap',
    },
    {
        id: 7,
        title: 'BIKE STORE',
        url: 'https://danieladam-bike-store.netlify.app/',
        desc: "This challenge is a website store for bikes. The link for the bikes data is: https://json-project3.herokuapp.com/products. The cards are created dynamically with JavaScript, looping through the array of objects. On the left side, there is a sidebar containing filters that filtering the cards appropriately, and the first filter named 'Show all' should be clicked when opening the page, and showing all of the cards. When clicking on each filter, the name of the filter should become bolder and colored orange. Also the badges should be filled with the correct numbers to show the customer how many items are in the selected filter.",
        tech: 'HTML, Bootstrap and jQuery',
    },
];

export default sites;

// Header Navigation
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelectorAll('.nav-item');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerBtnLines = document.querySelectorAll('.btn-line');

function toggleMenu() {
    if (navbar.classList.contains('active')) {
        hamburgerBtnLines.forEach(line => {
            line.classList.remove('active')
        });
        navbar.classList.remove('active');

    } else {
        hamburgerBtnLines.forEach(line => {
            line.classList.add('active')
        });
        navbar.classList.add('active');

    }
};
hamburgerBtn.addEventListener('click',toggleMenu);

// ***  ***  ***  *** 

// Home Slider
const mainElem = document.querySelector('.main');
const slider = document.querySelector('.slider');
const slideLeft = document.querySelector('#slideLeft');
const slideRight = document.querySelector('#slideRight');

function prevSlide() {
    slider.scrollLeft -= 150;
}

function nextSlide() {
    slider.scrollLeft += 150;
}

if (mainElem.classList.contains('home')) {
    slider.scrollLeft = 0;
    slideLeft.addEventListener('click', prevSlide);
    slideRight.addEventListener('click', nextSlide);
}

// ***  ***  ***  *** 

// Design Page
const designsContainer = document.querySelector('.designs-container');

const designs = [
    {
        id: 1,
        name: 'project number one',
        category: 'residential',
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam.',
        img: '/assets/images/img-28.jpg'
    },
    {
        id: 2,
        name: 'project number two',
        category: 'Commercial',
        information: 'In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Felis donec et odio pellentesque diam volutpat commodo sed. Arcu dictum varius duis at. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. ',
        img: '/assets/images/img-9.jpg'
    },
    {
        id: 3,
        name: 'project number three',
        category: 'Landscape',
        information: 'Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. A cras semper auctor neque vitae tempus quam pellentesque nec. Rhoncus aenean vel elit scelerisque mauris.',
        img: '/assets/images/img-29.jpg'
    },
    {
        id: 4,
        name: 'project number four',
        category: 'Interior design',
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam. Amet massa vitae tortor condimentum lacinia quis vel eros. ',
        img: '/assets/images/img-27.jpg'
    },
    {
        id: 5,
        name: 'project number five',
        category: 'Urban design',
        information: 'Urna neque viverra justo nec ultrices. Id aliquet lectus proin nibh nisl condimentum. Rhoncus dolor purus non enim praesent. Sit amet volutpat consequat mauris nunc congue. Nisi est sit amet facilisis magna. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Tincidunt nunc pulvinar sapien et. Scelerisque varius morbi enim nunc.',
        img: '/assets/images/img-11.jpg'
    },
    {
        id: 6,
        name: 'project number six',
        category: 'Green design',
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orci phasellus egestas tellus. ',
        img: '/assets/images/img-24.jpg'
    },
    {
        id: 7,
        name: 'project number seven',
        category: 'Industrial',
        information: 'Quam pellentesque nec nam aliquam sem et. Vitae tempus quam pellentesque nec nam aliquam sem. Laoreet non curabitur gravida arcu.',
        img: '/assets/images/img-23.jpg'
    }
];

designs.forEach( item => {
    designItemGenerator(item.name, item.category, item.information, item.img);
});

function showInfo(event) {
    inforElement = event.target.lastChild;
    if (inforElement.classList.contains('info')) {
        inforElement.style.display = 'block';
    }
}

function hideInfo(event) {
    inforElement = event.target.lastChild;
    if (inforElement.classList.contains('info')) {
        inforElement.style.display = 'none';
    }
}


function designItemGenerator(name, category, information, img) {
    let designItem = document.createElement('div');
    designItem.setAttribute('class', 'design-item');
    designItem.style.backgroundImage = 'url('+ img +')'

    let title = document.createElement('h3');
    title.setAttribute('class', 'title');
    title.innerHTML = name;

    let subheading = document.createElement('div');
    subheading.setAttribute('class', 'subheading');
    
    let subheadingLine = document.createElement('div');
    subheadingLine.setAttribute('class', 'subheading-line');
    
    let subheadingText = document.createElement('div');
    subheadingText.setAttribute('class', 'subheading-text');
    subheadingText.innerHTML = category;
    
    let designInfo = document.createElement('p');
    designInfo.setAttribute('class', 'info');
    designInfo.innerHTML = information;

    subheading.append(subheadingLine, subheadingText);
    designItem.append(title, subheading, designInfo);

    designsContainer.append(designItem);

    designItem.addEventListener('mouseover', showInfo);
    designItem.addEventListener('mouseout', hideInfo);
}
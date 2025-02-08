function toggleService(serviceName) {
    const service = document.getElementById(serviceName + '-service');
    const arrow = document.getElementById(serviceName + '-arrow')

    arrow.classList.toggle("rotate");
    if (service.style.display === 'none' || service.style.display === '') {
        service.style.display = 'block';
    } else {
        service.style.display = 'none';
    }
}

// document.addEventListener('click', function(e) {
//     var target = e.target
//     console.log(target);
// }, false);

// const buttons = document.querySelectorAll('button');

// // Add a click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     // Get the image inside the clicked button
//     const image = event.currentTarget.querySelector('img');

//     // Log the image source to the console
//     console.log(image.src);
//   });
// });

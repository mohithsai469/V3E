function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

//document.getElementById('contact-form').addEventListener('submit', function(event) {
//    event.preventDefault();
//    alert('Thank you for contacting us!');
//});
//document.getElementById('login-form').addEventListener('submit', function(event) {
//    event.preventDefault();
//    alert('Login Sucessful');
//});

//document.getElementById('login-button').addEventListener('click', function() {
//    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
//});
document.getElementById("contact-btn").addEventListener("click", function() {
    const contactInfo = "Email: innovativev3e@gmail.com\nPhone: +91 9381204253";
    navigator.clipboard.writeText(contactInfo).then(function() {
        document.getElementById("copy-message").style.display = "block";
        setTimeout(function() {
            document.getElementById("copy-message").style.display = "none";
        }, 2000);
    });
});

//document.getElementById('search-button').addEventListener('click', function() {
//  const query = document.getElementById('search-bar').value.toLowerCase();
//    const projects = document.querySelectorAll('.project');
//    const noResults = document.getElementById('no-results');
    
//    let found = false;

//    projects.forEach(function(project) {
//        const title = project.querySelector('h3').innerText.toLowerCase();
//        const description = project.querySelector('p').innerText.toLowerCase();

        // Check if the query matches the title or description
//        if (title.includes(query) || description.includes(query)) {
//            project.style.display = 'block';
//            found = true;
//        } else {
//            project.style.display = 'none';
//        }
//    });

//    if (!found) {
//        noResults.style.display = 'block';
//    } else {
//       noResults.style.display = 'none';
//    }
//});



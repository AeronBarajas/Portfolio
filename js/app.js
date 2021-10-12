const projects = $('#projects-body')

$.ajax('./json/projects.json')
.then((data) => {
    data.forEach((project) => {
        const div = $("<div class ='project'>")
        div.html(`
        <a href='${project.deployed}' target='_blank'>
        <img src= '${project.image}'>
        <h4>${project.name}</h4>
        </a>
        <p>${project.description}</p>
        <a href='${project.github}' target='_blank'>
        <p class='repo-link'>Repo</p>
        </a>`)
        projects.append(div)
    })
})

jQuery('button').click( function(e) {
    jQuery('.collapse').collapse('hide');
});
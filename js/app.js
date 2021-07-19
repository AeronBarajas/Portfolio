const projects = $('#projects-body')

$.ajax('./json/projects.json')
.then((data) => {
    data.forEach((project) => {
        const div = $("<div class ='project'>")
        div.html(`
        <img src= '${project.image}' class='img1'>
        <h4>${project.name}</h4>
        <p>${project.description}</p>`)
        projects.append(div)
    })
})
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const projects = xmlDoc.getElementsByTagName('project');
            const projectsContainer = document.getElementById('projects');
            
            var htmlContent = '';
            
            for (var i = 0; i < projects.length; i++) {
                var title = projects[i].getElementsByTagName('title')[0].textContent;
                var description = projects[i].getElementsByTagName('description')[0].textContent;
                var image = projects[i].getElementsByTagName('image')[0].textContent;
                
                htmlContent += '<div class="project">' +
                                   '<img src="' + image + '" alt="' + title + '">' +
                                   '<div class="details">' +
                                       '<h2>' + title + '</h2>' +
                                       '<p>' + description + '</p>' +
                                   '</div>' +
                               '</div>';
            }
            
            projectsContainer.innerHTML = htmlContent;
        });
});

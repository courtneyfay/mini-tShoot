function addProjects() {

	for (var i =0; i < 4; i++) {
		var projectDiv = document.getElementById("ourProjects");
		var project = document.createElement("div");
		var projectLink = document.createElement("a");
		var projectImage = document.createElement("img");
		projectLink.setAttribute("href", "https://github.com/courtneyfay/requesting-with-node");
		projectImage.setAttribute("src", "project"+[i]+".png");
		projectLink.appendChild(projectImage);
		project.appendChild(projectLink);
		projectDiv.appendChild(project);
	}
}
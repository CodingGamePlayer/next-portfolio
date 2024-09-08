function includeHTML() {
  const includes = document.getElementsByTagName("div");
  for (let i = 0; i < includes.length; i++) {
    const element = includes[i];
    const file = element.getAttribute("id")?.replace("-placeholder", ".html");
    if (file) {
      fetch(`components/${file}`)
        .then((response) => response.text())
        .then((data) => {
          element.innerHTML = data;
        })
        .catch((error) => console.error("Error loading file:", file, error));
    }
  }
}

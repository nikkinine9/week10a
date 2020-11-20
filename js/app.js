var heading = document.querySelector('h1');
console.log(heading);
heading.innerHTML = 'THE ART OF READING FACES'

var allHeadings = document.querySelectorAll('h3');
console.log(allHeadings);

for (var i = 0; i < allHeadings.length; i++) {
    allHeadings[i].innerHTML = 'The Face & It\'s Expression'
}

allHeadings[2].innerHTML = 'The Center of the Face';

var expressions = document.getElementById('expressions');
expressions.style.color = 'olive';
console.log(expressions.childNodes);
console.log(expressions.parentNodes);
console.log(expressions.firstChild);

var mexArticles = document.getElementsByClassName('mex');
for (var i = 0; i < mexArticles.length; i++) {
    mexArticles[i].style.backgroundColor = 'black';
}

var lastMexArticle = document.getElementsByClassName('mex')[2];
var newElement = document.createElement('p');
newElement.innerHTML = 'Studies have shown that emotions are spontaneously aroused, and that congenitally blind individuals produce the same facial expressions as sighted individuals do. Think about the connection between emotions and expressions. Charles Darwin (1872) was first to suggest that facial expressions of certain emotions were universal. Studies in his time were inconclusive; but research continued on and in the 1960s Silvan Tomkins conducted the first study demonstrating that facial expressions are in fact reliably associated with certain emotional states. In addition, facial expressions considered to be universal in humans have also been observed in non-human primates, particularly chimpanzees.'
document.body.appendChild(newElement);

document.querySelector('article').remove();

var faces = document.getElementById("faces");
for (var i = 0; i < faces.length; i++) {
    faces[i].classList.add("hoverable");
    faces[i].addEventListener("click", function() {
        this.classList.toggle("faded");
    });
}
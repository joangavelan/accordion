const headings = document.getElementsByClassName('accordion__heading');

for(let heading of headings) {
    heading.addEventListener('click', function() {
        let details = this.nextElementSibling;
        let icon = this.lastElementChild;
        
        if(details.style.maxHeight) {
            icon.innerHTML = '+';
            details.style.maxHeight = null;
        }
        else {
            details.style.maxHeight = details.scrollHeight + 'px';
            icon.innerHTML = '-';
        }
    })
}
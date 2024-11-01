document.getElementById('contact').addEventListener('click', function() {
    this.classList.toggle('contacted');
    if (this.classList.contains('contacted')) {
        this.innerText = '090979874';
    } else {
        this.innerText = 'Contact for Work';
    }
});

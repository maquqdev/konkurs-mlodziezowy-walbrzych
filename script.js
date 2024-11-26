function toggleIdea(element) {
    const content = element.querySelector('.idea-content');
    const isVisible = content.style.display === 'block';
    const allIdeas = document.querySelectorAll('.idea-content');

    allIdeas.forEach((idea) => (idea.style.display = 'none'));

    content.style.display = isVisible ? 'none' : 'block';
}

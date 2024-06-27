function blockText() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(' ').filter(word => word.trim() !== '');
    const output = document.getElementById('output');
    output.innerHTML = '';

    words.forEach(word => {
        const block = document.createElement('div');
        block.className = 'block';
        if (/^[^\w\s]+$/.test(word)) {
            block.classList.add('symbol');
        }
        block.textContent = word;
        output.appendChild(block);
    });
}

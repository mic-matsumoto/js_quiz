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
        } else if (/^[^a-zA-Z]+$/.test(word)) {
            block.classList.add('non-alphabetic');
        }

        block.textContent = word;
        output.appendChild(block);
    });
}
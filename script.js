document.getElementById('translateButton').addEventListener('click', async () => {
    const textToTranslate = document.getElementById('textToTranslate').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    if (!textToTranslate || !targetLanguage) {
        alert('Please enter text and target language.');
        return;
    }

    const url = 'https://libretranslate.com/translate';
    const data = {
        q: textToTranslate,
        source: 'auto', // Detect source language automatically
        target: targetLanguage
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('translatedText').innerText = result.translatedText;
    } catch (error) {
        console.error('Error:', error);
        alert('Translation failed. Please try again.');
    }
});

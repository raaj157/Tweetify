function showCustomMenu(event) {
    const selection = window.getSelection().toString().trim();
    const customMenu = document.getElementById('custom-menu');

    if (selection !== '') {
        customMenu.style.top = `${event.clientY}px`;
        customMenu.style.left = `${event.clientX}px`;
        customMenu.style.display = 'block';
    } else {
        customMenu.style.display = 'none';
    }
}

function shareOnTwitter() {
    const selection = window.getSelection().toString().trim();
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selection)}`;
    
    // Open the Twitter sharing window
    window.open(tweetUrl, '_blank', 'width=600,height=300');
    
    // Hide the custom menu after sharing
    document.getElementById('custom-menu').style.display = 'none';
}
    const cube = document.getElementById('cube');

    // Pause animation au clic
    cube.addEventListener('click', () => {
      cube.classList.toggle('paused');
    });

    // Redémarre animation au double-clic
    cube.addEventListener('dblclick', () => {
      cube.classList.remove('paused');
    });
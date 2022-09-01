async function loadLevel(level) {
    const response = await fetch(`http://localhost:8000/level/${level}`);
    const data = await response.json();
    return data;
}

export {loadLevel}
export default function loadHome() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the finest dining with us.</p>
    `;
    content.appendChild(div);
}
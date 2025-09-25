export default function loadMenu() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>Menu</h2>
    <ul>
        <li>Pizza - $10</li>
        <li>Burger - $8</li>
        <li>Pasta - $12</li>
    </ul>
    `;
    content.appendChild(div);
}
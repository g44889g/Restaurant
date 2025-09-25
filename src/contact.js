export default function loadContact() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: info@deliciousfood.comm</p>
        <p>Phone: (123) 456-7890</p>
    `;
    content.appendChild(div);

}
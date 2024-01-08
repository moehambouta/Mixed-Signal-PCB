document.addEventListener('DOMContentLoaded', function() {
    // Define the common HTML components
    const navbarHtml = `
        <nav id="navbar">
            <ul>
                <li><a href="https://github.com/moehambouta">Mohamed Hambouta</a></li>
                <li><a href="https://github.com/moehambouta">About</a></li>
                <li><a href="https://github.com/moehambouta">Projects</a></li>
                <li><svg viewBox="0 0 18 15" width="18px" height="15px">
                    <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"></path>
                </svg></li>
            </ul>
        </nav>
    `;
    const githubHtml = `
        <div id="github">
            <a href="https://github.com/moehambouta/Mixed-Signal-PCB"><img src="assets/github.svg" alt="GitHub Logo"></a>
            <p>View GitHub Repository</p>
        </div>
    `;
    const indexHtml = `
        <section id="index">
            <p>Links to the other parts in this series:</p>
            <ol type="1">
                <li><a href="index.html">Introduction</a></li>
                <li><a href="usb.html">USB Type-C Interface</a></li>
                <li><a href="mcu.html">Microcontroller Unit (STM32)</a></li>
                <li><a href="power.html">Power Supply Design</a></li>
                <li><a href="adc.html">Analog-to-Digital Converter (ADC)</a></li>
                <li><a href="dac.html">Digital-to-Analog Converter (DAC)</a></li>
                <li><a href="pcb.html">Final PCB 3D Model</a></li>
                <li><a href="future.html">Next Steps: Manufacturing and Experimentation</a></li>
            </ol>
        </section>
    `;
    const footerHtml = `
        <footer>
            <p>&copy; Mohamed Hambouta 2024</p>
        </footer>
    `;

    // Get references to the unique elements
    const headerElement = document.querySelector('#header');
    const mainElement = document.querySelector('#main');

    // Insert the common HTML components
    headerElement.insertAdjacentHTML('beforebegin', navbarHtml);
    headerElement.insertAdjacentHTML('afterend', githubHtml);
    mainElement.insertAdjacentHTML('beforebegin', indexHtml);
    mainElement.insertAdjacentHTML('afterend', footerHtml);
});

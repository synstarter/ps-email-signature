document.getElementById("signature-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get Form Values
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    // Generate the signature text (formatted version to display in plain text)
    let signatureText = `
        ${name}
        ${job}
        ${email}
        ${phone}
    `;
    
    // Generate the signature HTML for display (with styling and links)
    let signatureHtml = `
        <div style="font-family: Arial, Helvetica, sans-serif;">
            <strong style= "margin: 0; padding: 0; font-size: 12pt;">${name}</strong>
            <p style= "margin: 0; padding: 0; font-size: 11pt;">${job}</p>
            <p style="margin: 0; padding: 0; color: #0563c1; text-decoration: none; font-size: 11pt;"><a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0; padding: 0; color: #0563c1; text-decoration: none; font-size: 11pt;"><a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 0; padding: 0; color: #0563c1; text-decoration: none; font-size: 11pt;"><a href="https://pricespider.com" target="_blank">www.pricespider.com</a></p><br>
            <img src="https://raw.githubusercontent.com/synstarter/ps-email-signature/20da807db0c46232f029e829e1d69bab0491107c/imgs/imgs2/logo.png" alt="Company Logo" style="margin: 0; padding: 0;">
            <p style= "margin: 0; padding: 0; line-height: 1;">
            <a href="" target= "_blank"><img src="https://raw.githubusercontent.com/synstarter/ps-email-signature/20da807db0c46232f029e829e1d69bab0491107c/imgs/imgs2/fb.png" alt="Facebook Page" style="margin: 0; padding: 0;"></a>
            <a href="" target= "_blank"><img src="https://raw.githubusercontent.com/synstarter/ps-email-signature/20da807db0c46232f029e829e1d69bab0491107c/imgs/imgs2/x.png" alt="Twitter Page" style="margin: 0; padding: 0;"></a>
            <a href="" target= "_blank"><img src="https://raw.githubusercontent.com/synstarter/ps-email-signature/20da807db0c46232f029e829e1d69bab0491107c/imgs/imgs2/in.png" alt="LinkedIn Page" style="margin: 0; padding: 0;"></a>
            </p>
            <p style= "margin: 10px 0; font-size: 10pt; color: #858585;"><i>This email is intended solely for the use of the individual(s) to whom it is addressed and may contain information that is privileged, confidential or otherwise required to be protected from disclosure. If the reader of this email is not the intended recipient, you are hereby notified that any dissemination, distribution, copying or other use of this communication or its attachments is strictly prohibited. If you have received this communication in error, please delete it as well as all copies or backups of it entirely from your email system and notify me that you received this email in error. Thank you.</i></p>
        </div>`;

    // Display the generated signature HTML (formatted version with links, bold, etc.)
    document.getElementById('signature-preview').innerHTML = signatureHtml;
    document.getElementById('copy-signature').style.display = 'block';

    // Enable the "Copy Signature" button to copy the formatted signature HTML
    document.getElementById('copy-signature').onclick = function() {
        // Use the Clipboard API to copy the HTML content with styling
        const signaturePreview = document.getElementById('signature-preview');
        
        // Create a new ClipboardItem object with the signature's HTML content
        const blob = new Blob([signaturePreview.innerHTML], { type: 'text/html' });
        const item = new ClipboardItem({ "text/html": blob });

        // Write the clipboard item
        navigator.clipboard.write([item]).then(function() {
            document.getElementById("success-msg").style.display= 'block';

            // Hide the success message after 3 seconds
            let success_msg = document.getElementById("success-msg");
            setTimeout(() => {
                success_msg.style.display = 'none';
            }, 3000
            );

            // alert('Signature copied to clipboard!');
        }).catch(function(err) {
            console.error('Could not copy text: ', err);
            alert('Failed to copy signature. Please try again.');
        });
    };
});

import React from 'react';
import linkedLogo from '../../../images/linkedin.jfif';
import gitLogo from '../../../images/github.png';

export default function Contact() {
    return (
        <footer id="contact">
            <h2>email me @ bjtsmith23@gmail.com</h2>
            <div>
                <a target="_blank" href="https://drive.google.com/file/d/19nFbGKVYRzbx9YjQ73CYdwyzapxogIH9/view?usp=sharing">
                    
                <div><strong>Click Here For Resume!! </strong></div>
                </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/brian-smith-092509103/">
                        <img src={linkedLogo} alt="LinkedIn Logo" target="_blank"
                        /></a>
                    <div><strong>Linkedin</strong></div>
                </div>

                <div>
                    <a href="https://github.com/bjtsmith23">
                        <img src={gitLogo} alt="Github Logo" target="_blank"
                        /></a>
                    <div><strong>Github</strong></div>
                </div>

        </footer>

    );
}


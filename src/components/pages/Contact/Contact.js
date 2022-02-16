import React from 'react';
import linkedLogo from '../../../images/linkedin.jfif';
import gitLogo from '../../../images/github.png';
import './Contact.css';
// import Header from '../../../components/Header';

export default function Contact() {
    return (
        <div id="contact">

            <h7>email: bjtsmith23@gmail.com</h7>
            <a href="https://drive.google.com/file/d/19nFbGKVYRzbx9YjQ73CYdwyzapxogIH9/view?usp=sharing" class="btn btn-success" target="_blank" rel="noreferrer" role="button">Click Here For Resume!!</a>

            <div class="social">
            <div class="qqq">
                <a href="https://www.linkedin.com/in/brian-smith-092509103/">
                    <img class="logo" src={linkedLogo} alt="LinkedIn Logo" target="_blank"
                    /></a>
                <div><strong>Linkedin</strong></div>
            </div>

            <div class="qqq">
                <a href="https://github.com/bjtsmith23">
                    <img class="logo" src={gitLogo} alt="Github Logo" target="_blank"
                    /></a>
                <div><strong>Github</strong></div>
            </div>

            </div>
           

        </div>

    );
}


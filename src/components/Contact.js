import React from 'react'
import ripmedical from '../assets/images/ripmedical.png'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">

            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                      <a href="https://ripmedicaldebt.org/"><span>
                        <img src={ripmedical} alt="" /></span>
                        <h3>RIP Medical Debt</h3>
                        <span>ripmedicaldebt.org</span>
                        </a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

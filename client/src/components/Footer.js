import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div>
            <section className="footer">
                <h2>Quel Mazzolin di fiori<span className="year">2020</span></h2>
                <Link activeStyle={{ color: "white" }} to="/contact">Contact</Link> 
            </section>
        </div>
    )
}

import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
    <section className="cta">
       <p className="!text-slate-200 cta-text"> You can contact me here <br className="sm:block hidden"/>
        Let's build it!!
        </p>
        <Link to="/contact" className="btn">Contact me</Link>
    </section>
    )
}

export default CTA;


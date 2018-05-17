import React, { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact__content">
      <div className="contact__content--text">
      <h2>contact</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
</p>
      </div>
      <div className="contact__content--form">
					<span className="contact_content--logo">Tell us about your project</span>
					<div className="contact_content--form">
						<form action="index.html" target="_blank" method="post">
							<label className="contact_content--label" htmlFor="">
		            <input type="text" name="firstName" value="" placeholder="NAME" required />
		          </label>
							<label className="contact_content--label" htmlFor="">
		            <input type="email" name="" value="" placeholder="E-MAIL" required />
		          </label>
							<label className="contact_content--label" htmlFor="">
		            <textarea name="" value="" placeholder="MESSAGE" required></textarea>
		          </label>
							<button type="submit">LEAVE ME A MESSAGE</button>
						</form>
					</div>
      </div>
      </div>
    );
  }
}

export default Contact;

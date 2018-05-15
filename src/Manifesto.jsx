import React, { Component } from "react";
import "../styles/manifesto.css";

class Manifesto extends Component {
  render() {
    return (

              <div className="manifesto__content">
              <div className="manifesto__content--text">
              <h2>manifesto</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
      </p>
              </div>
              <div className="manifesto__content--photo">
              <img src="./img/manifesto.jpg" />
              </div>
              </div>
    );
  }
}

export default Manifesto;

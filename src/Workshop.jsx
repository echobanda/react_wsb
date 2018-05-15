import React, { Component } from "react";
import "../styles/workshop.css";


class Workshop extends Component {
  render() {
    return (

        <div className="workshop__content">
        <div className="workshop__content--text">
        <h2>workshop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis iaculis eros, non volutpat nulla sollicitudin in. Suspendisse pulvinar dictum augue, vel faucibus massa laoreet sit amet. Etiam luctus laoreet nibh. Aliquam magna tortor, mattis sit amet augue pharetra, finibus sodales mi. Integer consequat semper vulputate. Sed et mi sit amet odio porta porta. Nulla facilisi. Praesent aliquet vel turpis eget commodo. Pellentesque lacus nisl, viverra a elit nec, fringilla placerat mi. Curabitur vitae diam at odio viverra cursus vel commodo nisl. Pellentesque venenatis eros vel risus sollicitudin, ut consectetur magna tempor.
</p>
        </div>
        <div className="workshop__content--photo">
        <img src="./img/workshop.jpg" />
        </div>
        </div>
    );
  }
}

export default Workshop;

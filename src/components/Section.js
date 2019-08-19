import React from 'react';

function Section(props) {
  return(
    <section className="mt-4">
      <div className="container-fluid">
        <div className="row">
          {props.children}
        </div>
      </div>
    </section>
 )
}

export default Section;

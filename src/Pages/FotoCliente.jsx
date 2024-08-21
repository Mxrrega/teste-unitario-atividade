import React, { useState } from 'react';

function FotoCliente({ foto }) {

  const [active, setActive] = useState(false);

  return (
    <article className={ (foto ) ? "imagemResponsiva" : "none" }>
      {foto ? (
        <img
          src={foto}
          alt="Foto do Cliente"
          className={ active ? "Active" : "Disable" }
          onClick={() => setActive(true)}
        />
      ) : (
        <main>
          <p className="none">Bota a foto ai</p>
        </main>
      )}
    </article>
  );
}

export default FotoCliente;
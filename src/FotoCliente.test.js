import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Foto from '../src/Pages/FotoCliente';
import React from 'react';

describe('Componente FotoCliente', () => { 

    it('Se o Active foi realizado', async () => {
        render( <Foto foto={true} />);
        const fotoElement = screen.getByRole('img');
        userEvent.click(fotoElement);
        await waitFor(() => {
            expect(fotoElement).toHaveClass('Active');
        });
    });

    it('Se o Active não foi realizado', async () => {
        render( <Foto foto={false} />);
        const fotoElement = screen.getByRole('img');
        userEvent.click(fotoElement);
        await waitFor(() => {
            expect(fotoElement).toHaveClass( "class" , 'Disable');
        });
    });

    it('Se tem foto', () => {
        render( <Foto foto={true} />);
        const fotoElement = screen.getByRole('img');
        expect( fotoElement ).toBeInTheDocument();
    });

    it('Se não tem foto', () => {
        render( <Foto foto={false} />);
        const span = screen.getByRole("main");
        expect( span ).toBeInTheDocument();
    });

    it('Se não tem foto verifica a classe', () => {
        render( <Foto foto={false} />);
        const main = screen.getByRole("article");
        expect( main ).toHaveAttribute( "class" , "none" )
    });
    
    it('Se tem foto verifica a classe imagemresponsiva', () => {
        render( <Foto foto={true} />);
        const main = screen.getByRole("article");
        expect( main ).toHaveAttribute( "class" , "imagemResponsiva" )
    });

    // se tem a foto verifica a classe 'imagemresponsiva'
});
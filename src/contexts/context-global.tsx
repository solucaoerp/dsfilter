import React, { ReactNode, ReactElement } from 'react';

/* Define as propriedades esperadas pelo componente GlobalProvider */
interface GlobalProviderProps {
    providers: Array<ReactElement>; // Um array de elementos React que são Providers de Context
    children: ReactNode; // Os filhos do componente que serão envolvidos pelos Providers
}

/**
 * O componente GlobalProvider é responsável por envolver a aplicação ou partes dela
 * com múltiplos Providers de Context do React.
 *
 * @param {GlobalProviderProps} props - As propriedades passadas para o componente GlobalProvider,
 * incluem um array de Providers e os filhos que serão envolvidos por esses Providers.
 *
 * @returns {React.ReactElement} - Retorna um elemento React que representa o componente GlobalProvider.
 */
export function GlobalProvider({ providers, children }: GlobalProviderProps): React.ReactElement {
    // Reduz o array de Providers, envolvendo recursivamente os filhos com cada Provider.
    // O método reduceRight é usado para garantir que o último Provider no array seja o mais
    // externo, envolvendo todos os outros Providers que estão mais internos.
    return providers.reduceRight(
        // A função passada para o reduceRight recebe os filhos acumulados (kids) e o Provider atual (parent).
        function (kids, parent) {
            // Usa React.cloneElement para clonar o Provider atual e passar os filhos acumulados para ele.
            // Isso efetivamente envolve os filhos com o Provider.
            return React.cloneElement(parent, { children: kids });
        },
        children as ReactElement // Inicia a redução com os filhos originais do GlobalProvider.
    );
}
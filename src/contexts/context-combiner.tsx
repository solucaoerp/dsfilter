import { ProductCountContext, ProductCountContextType } from './context-product';
/* Importe outros contextos conforme necessário */

/**
 * Tipo para a estrutura dos valores de contextos combinados.
 * Este tipo é usado para definir a forma do objeto que contém todos os valores dos contextos
 * que queremos combinar e passar para os componentes de contexto Provider correspondentes.
 */
type CombinedContextValues = {
    productCountContext: ProductCountContextType; // Este é o contexto para a contagem de produtos.
    // Adicione outros contextos como este
};

/**
 * Cria uma array de provedores de contexto React.
 * 
 * Esta função aceita um objeto com os valores atuais dos contextos e retorna
 * uma array de elementos <Provider> para cada contexto. Estes provedores podem então
 * ser utilizados para envolver a aplicação ou partes dela, fornecendo acesso ao contexto
 * em componentes mais profundos na árvore de componentes.
 *
 * @param {CombinedContextValues} values - Um objeto que contém os valores atuais para todos os contextos que queremos prover.
 * @returns {Array<JSX.Element>} Uma array de provedores de contexto.
 */
export function createGlobalContextProviders(values: CombinedContextValues) {
    return [
        // O provedor do contexto de contagem de produtos com os valores atuais passados para ele.
        <ProductCountContext.Provider value={values.productCountContext} key="productCount" />,
        // Instâncias de outros provedores de contexto aqui
    ];
}

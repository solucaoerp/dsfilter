import { createContext } from "react";

/**
 * Define o tipo do contexto para a contagem de produtos. Este contexto
 * faz parte de um sistema maior de contextos combinados, sendo integrado
 * através do GlobalProvider para uma gestão de estado centralizada e flexível.
 *
 * @typedef ProductCountContextType
 * @type {object}
 * @property {number} productCount - A quantidade atual de produtos atendendo aos critérios de filtragem.
 * @property {Function} setProductCount - Uma função para atualizar a `productCount`.
 */
export type ProductCountContextType = {
    productCount: number;
    setProductCount: (count: number) => void;
};

/**
 * Criação do contexto de contagem de produtos com valores padrão.
 * Este contexto será fornecido aos componentes da aplicação através do GlobalProvider.
 *
 * @constant {ProductCountContextType}
 */
export const ProductCountContext = createContext<ProductCountContextType>({
    productCount: 0,
    setProductCount: () => { },
});

/**
 * @fileoverview
 *
 * Fornece o contexto para a contagem de produtos dentro da aplicação.
 *
 * @typedef {Object} ProductCountContextType
 * @property {number} productCount - A quantidade atual de produtos atendendo aos critérios de filtragem.
 * @property {Function} setProductCount - Função para atualizar `productCount`.
 *
 * @description
 * O `ProductCountContext` é parte de um sistema integrado de contextos que é gerenciado pelo `GlobalProvider`.
 * Ele permite uma gestão centralizada e flexível do estado relacionado à contagem de produtos.
 *
 * @example
 * // Integração com o GlobalProvider:
 * const contextValues = { productCount, setProductCount };
 * const providers = createGlobalContextProviders(contextValues);
 * // Uso dentro de um componente:
 * const { productCountContext } = useContext(GlobalContext);
 * const { productCount, setProductCount } = productCountContext;
 *
 * @see GlobalProvider para mais informações sobre a integração de contextos.
 */

/**
 * Exemplo de Componente utilizando o `ProductCountContext`.
 * Este exemplo demonstra como um componente funcional pode consumir e interagir com o contexto.
 * 
 * Nota: Este exemplo é apenas ilustrativo e normalmente estaria em seu próprio arquivo.
 * -----------------------------------------------------------------------------

    import React, { useContext } from "react";
    import { ProductCountContext } from "./context-product";

    function ProductCounter() {
        const { productCount, setProductCount } = useContext(ProductCountContext);

        function increment() {
            setProductCount(productCount + 1);
        }

        return (
            <div>
                <p>Contagem de produtos: {productCount}</p>
                <button onClick={increment}>Incrementar</button>
            </div>
        );
    }

    export default ProductCounter;
    
 * -----------------------------------------------------------------------------
 */
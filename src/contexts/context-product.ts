import { createContext } from "react";

/**
 * Tipo para o contexto de contagem de produtos.
 *
 * Esse tipo especifica a estrutura do contexto que será utilizado para armazenar
 * e atualizar a contagem de produtos no aplicativo.
 *
 * @property {number} productCount - Variável que armazena o número atual de produtos que atendem
 *                                   a determinados critérios (como filtros aplicados).
 *
 * @property {Function} setProductCount - Função que atualiza o valor de `productCount`.
 *                                        Ela é invocada sempre que é necessário refletir uma
 *                                        mudança na quantidade de produtos (por exemplo, após
 *                                        a aplicação de um filtro).
 */
export type ProductCountContextType = {
    productCount: number;
    setProductCount: (count: number) => void;
};

/**
 * Contexto para a contagem de produtos.
 *
 * Este contexto fornece um meio para componentes acessarem e modificarem o estado que representa
 * a contagem de produtos. O contexto é inicializado com um valor padrão e uma função de atualização
 * que serão substituídos pelo uso de um `Provider`.
 *
 * Inicialização:
 * - `productCount` é iniciado com 0, assumindo que ainda não há produtos contabilizados.
 * - `setProductCount` é uma função vazia que será substituída pelo provedor do contexto.
 *
 * Uso:
 * Um componente no topo da aplicação (Exemplo: App.tsx), deve utilizar o `ProductCountContext.Provider` para
 * envolver os componentes filhos que necessitam acessar ou modificar a contagem de produtos.
 * Através do `Provider`, os valores atuais e a função de atualização são passados para os
 * componentes descendentes.
 *
 * Exemplo de Provedor:
 * <ProductCountContext.Provider value={{ productCount, setProductCount }}>
 *   {/* Componentes filhos *\/}
 * </ProductCountContext.Provider>
 *
 * Exemplo de Consumidor:
 * const { productCount, setProductCount } = useContext(ProductCountContext);
 * - Agora é possível ler e atualizar a contagem de produtos.
 */
export const ProductCountContext = createContext<ProductCountContextType>({
    productCount: 0,
    setProductCount: () => { },
});
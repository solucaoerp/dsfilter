import './styles.css';

import { useContext } from 'react';
import { ProductCountContext } from '../../../contexts/context-product';

export default function Header() {
    const { productCount } = useContext(ProductCountContext);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-brand">
                    DSFilter
                </div>
                <div className="header-products">
                    {productCount} produto(s)
                </div>
            </div>
        </header>
    );
}
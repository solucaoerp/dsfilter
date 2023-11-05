import './styles.css';

export default function Header() {
    const productCount = 6;

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
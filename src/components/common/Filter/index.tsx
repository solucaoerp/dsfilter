import { useState, useContext } from 'react';
import { ProductCountContext } from '../../../contexts/context-product';

import styles from './Filter.module.css';
import { ChangeEventTypeCustom, FormEventTypeCustom } from '../../../utils/TypesEvents';
import { FilterData } from '../../../types/FilterTypes';
import { ProductDTO } from '../../../models/product';

type FilterProps = {
    onFilter: (minPrice: number, maxPrice: number) => ProductDTO[];
};

export default function Filter({ onFilter }: FilterProps) {
    const [filterData, setFilterData] = useState<FilterData>({});
    const { setProductCount } = useContext(ProductCountContext);

    function handleInputChange(event: ChangeEventTypeCustom) {
        const value = event.target.value === '' ? undefined : parseFloat(event.target.value);
        const name = event.target.name as keyof FilterData;
        setFilterData({ ...filterData, [name]: value });
    }

    function handleSubmit(event: FormEventTypeCustom) {
        event.preventDefault();
        const filteredProducts = onFilter(filterData.minPrice ?? 0, filterData.maxPrice ?? Number.MAX_VALUE);
        setProductCount(filteredProducts.length);
    }

    return (
        <form className={styles.filterForm} onSubmit={handleSubmit}>
            <input
                name="minPrice"
                className={styles.inputField}
                type="number"
                placeholder="Preço mínimo"
                value={filterData.minPrice ?? ''}
                onChange={handleInputChange}
            />
            <input
                name="maxPrice"
                className={styles.inputField}
                type="number"
                placeholder="Preço máximo"
                value={filterData.maxPrice ?? ''}
                onChange={handleInputChange}
            />
            <button className={styles.filterButton} type="submit">
                Filtrar
            </button>
        </form>
    );
}
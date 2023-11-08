import { useState } from 'react';

import styles from './Filter.module.css';
import { ChangeEventTypeCustom, FormEventTypeCustom } from '../../../utils/TypesEvents';
import { FilterData } from '../../../types/FilterTypes';

type FilterProps = {
    onFilter: (minPrice: number, maxPrice: number) => void;
};

export default function Filter({ onFilter }: FilterProps) {
    const [filterData, setFilterData] = useState<FilterData>({});

    function handleInputChange(event: ChangeEventTypeCustom) {
        const value = event.target.value === '' ? undefined : parseFloat(event.target.value);
        const name = event.target.name as keyof FilterData;
        setFilterData({ ...filterData, [name]: value });
    }

    function handleSubmit(event: FormEventTypeCustom) {
        event.preventDefault();
        // Simplesmente chame onFilter sem esperar por um retorno
        onFilter(filterData.minPrice ?? 0, filterData.maxPrice ?? Number.MAX_VALUE);
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
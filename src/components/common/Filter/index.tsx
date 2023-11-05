import { useState } from 'react';
import styles from './Filter.module.css';
import { ChangeEventTypeCustom, FormEventTypeCustom } from '../../../utils/TypesEvents';
import { FilterData } from '../../../types/FilterTypes';

export default function Filter() {
    const [filterData, setFilterData] = useState<FilterData>({});

    function handleInputChange(event: ChangeEventTypeCustom) {
        const value = event.target.value === '' ? undefined : parseFloat(event.target.value);
        const name = event.target.name as keyof FilterData;
        setFilterData({ ...filterData, [name]: value });
    }

    function handleSubmit(event: FormEventTypeCustom) {
        event.preventDefault();
        const minValue = filterData.minPrice ?? 0;
        const maxValue = filterData.maxPrice ?? Number.MAX_VALUE;

        console.log('Filtrando valores entre:', minValue, 'e', maxValue);
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

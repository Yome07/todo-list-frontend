/**
 * Composant de filtre par catégorie pour les tâches.
 * Affiche un menu déroulant permettant de filtrer les éléments selon leur catégorie.
 *
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onFilterChange - Fonction callback appelée lors du changement de catégorie sélectionnée
 * @param {string[]} props.categories - Tableau des catégories disponibles à afficher dans le menu déroulant
 * @param {string} props.filterCategory - La catégorie actuellement sélectionnée
 * @returns {JSX.Element} Un composant DropdownList avec l'option "Toutes les catégories" et les catégories disponibles
 *
 */
import DropdownList from './DropdownList';

const CategoryFilter = ({categories, filterCategory, onFilterChange}) => {
    const categoriesWithAll = [
        { id: null, name: "Toutes les catégories" },
        ...categories
    ];

    return (
        <div className="mb-3">
            <label className="form-label">Filtrer par catégorie :</label>
            <DropdownList
                list={categoriesWithAll}
                value={filterCategory}
                onChange={(id) => onFilterChange(id)}
            />
        </div>
    )
}

export default CategoryFilter;
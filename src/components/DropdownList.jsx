/**
 * Composant de liste déroulante générique
 *
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.list - La liste des éléments à afficher dans le menu déroulant
 * @param {string} props.value - La valeur actuellement sélectionnée
 * @param {Function} props.onChange - Fonction de rappel appelée lors du changement de sélection
 * @returns {JSX.Element} Un élément select avec les options de la liste
 *
 */
const DropdownList = ({list, value, onChange}) => {

    const handleChange = (e) => {
        const val = e.target.value;
        onChange(val === 'null' ? null : Number(val));
    }
    return (
        <select className="form-select" value={value ?? 'null'} onChange={handleChange}>
            {list.map(el => (
                <option key={el.id} value={el.id === null ? 'null' : el.id }>{el.name}</option>
            ))}
        </select>
    );
}

export default DropdownList;
/**
 * Composant Input qui affiche un champ de saisie de texte avec les classes Bootstrap.
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.placeholder - Le texte d'indication affiché dans le champ de saisie
 * @param {string} props.value - La valeur actuelle du champ de saisie
 * @param {Function} props.onChange - La fonction de callback appelée lorsque la valeur du champ change
 * @returns {JSX.Element} Un élément input avec les propriétés fournies
 */
const Input = ({placeholder, value, onChange}) => {
    return <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
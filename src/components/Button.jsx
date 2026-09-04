/**
 * Composant Button - Affiche un bouton stylisé avec Bootstrap
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onClick - Fonction appelée lors du clic sur le bouton
 * @param {string} props.label - Le texte affiché sur le bouton
 * @param {string} props.type - Le type du bouton (submit, button, reset)
 * @returns {JSX.Element} Un élément button avec les styles Bootstrap
 * 
 */
const Button = ({onClick, label, type}) => {
    
    
    return <button 
        className={"btn btn-success"} 
        type={type} 
        onClick={onClick}
    >
        {label}
    </button>
}

export default Button;
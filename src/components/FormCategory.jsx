/**
 * Composant FormCategory - Formulaire de gestion des catégories
 * 
 * Permet à l'utilisateur d'ajouter de nouvelles catégories via un formulaire.
 * Utilise un état local pour gérer la valeur du champ de saisie et réinitialise
 * automatiquement le formulaire après la soumission.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.addCategory - Fonction callback pour ajouter une nouvelle catégorie
 * @returns {JSX.Element} Le formulaire de création de catégorie avec un champ de saisie et un bouton
 * 
 */
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const FormCategory = ({addCategory}) => {
    const [newCategory, setNewCategory] = useState("");

    /**
     * Gère l'ajout d'une nouvelle catégorie.
     * Empêche le comportement par défaut du formulaire, ajoute la catégorie via props,
     * puis réinitialise le champ de saisie.
     * 
     * @param {Event} e - L'événement de soumission du formulaire
     */
    const handleAddCategory = (e) => {
        e.preventDefault();
        addCategory(newCategory);
        setNewCategory(""); //pour vider l’input
    }

    return (
        <div className="mb-4">
            <h5 className="mb-3">Gérer les catégories</h5>
            <form className="row g-2" onSubmit={handleAddCategory}>
                <div className="col-md-9 col-lg-10">
                    <Input 
                        placeholder="Nouvelle catégorie" 
                        value={newCategory} 
                        onChange={(e) => setNewCategory(e.target.value)} 
                    />
                </div>
                <div className="col-md-3 col-lg-2">
                    <Button 
                        label="Ajouter catégorie" 
                        type="submit" 
                    />
                </div>
            </form>
        </div>
    );
}

export default FormCategory;
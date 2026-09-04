/**
 * Composant formulaire pour ajouter une nouvelle tâche.
 *
 * Permet à l'utilisateur de saisir une tâche, de sélectionner une catégorie
 * et d'ajouter la tâche à la liste. Sélectionne automatiquement la première
 * catégorie disponible si aucune n'est choisie.
 *
 * @param {Object} props - Les propriétés du composant
 * @param {Array<string>} props.categories - Liste des catégories disponibles
 * @param {Function} props.addTask - Fonction callback pour ajouter une tâche
 * @returns {JSX.Element} Le formulaire d'ajout de tâche
 */
import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";
import DropdownList from "./DropdownList";

const FormTask = ({categories, addTask}) => {
    const [newTask, setNewTask] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    // Sélectionner automatiquement la première catégorie quand la liste change
    useEffect(() => {
        if (categories.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0].id);
        }
    }, [categories, selectedCategory]);

    /**
     * Gère l'ajout d'une nouvelle tâche au formulaire.
     * Empêche le comportement par défaut du formulaire, crée un objet tâche
     * avec le texte saisi, la catégorie sélectionnée (ou "Sans catégorie" par défaut)
     * et l'état non complété, puis l'ajoute via la fonction addTask des props.
     * Réinitialise ensuite le champ de saisie.
     *
     * @param {Event} e - L'événement de soumission du formulaire
     * @returns {void}
     */
    const handleAddTask = (e) => {
        e.preventDefault();
        const task = {
            description: newTask,
            category: selectedCategory || null,
            is_completed: false
        };
        addTask(task);
        setNewTask(""); // Vider l'input de la tâche
    }

    return (
        <div className="mb-3">
            <h5 className="mb-3">Ajouter une tâche</h5>
            <form className="row g-2" onSubmit={handleAddTask}>
                <div className="col-md-5 col-lg-6">
                    <Input
                        placeholder="Nouvelle tâche"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <div className="col-md-4 col-lg-4">
                    {categories.length > 0 ? (
                        <DropdownList
                            list={categories}
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                        />
                    ) : (
                        <select className="form-select" disabled>
                            <option>Créez d'abord une catégorie</option>
                        </select>
                    )}
                </div>
                <div className="col-md-3 col-lg-2">
                    <Button label="Ajouter" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default FormTask;

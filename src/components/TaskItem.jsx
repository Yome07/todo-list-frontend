/**
 * Composant qui affiche une tâche individuelle dans la liste des tâches.
 *
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.task - L'objet tâche contenant les informations de la tâche
 * @param {string} props.task.text - Le texte de la tâche
 * @param {boolean} props.task.completed - L'état de complétion de la tâche
 * @param {string} props.task.category - La catégorie de la tâche
 * @param {Function} props.toggleTaskCompleted - Fonction pour basculer l'état de complétion de la tâche
 * @param {Function} props.removeTask - Fonction pour supprimer la tâche
 * @returns {JSX.Element} Le composant TaskItem rendu
 */
import Button from "./Button";

const TaskItem = ({task, toggleTaskCompleted, removeTask}) => {

    const handleTaskCompleted = () => {
        toggleTaskCompleted(task);
    }
    const handleRemoveTask = () => {
        removeTask(task);
    }

    return (
        <div className="card mb-2">
            <div className="card-body d-flex align-items-center">
                <div className="form-check me-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={task.is_completed}
                        onChange={handleTaskCompleted}
                    />
                </div>
                <div className="flex-grow-1 text-center">
                    <span className={task.is_completed ? 'text-decoration-line-through text-muted' : ''}>
                        {task.description} ({task.category?.name || "Sans catégorie"})
                    </span>
                </div>
                <Button
                    label="Supprimer"
                    onClick={handleRemoveTask}
                    type="button"
                />
            </div>
        </div>
    );
}

export default TaskItem;
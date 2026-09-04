/**
 * Composant principal de l'application To-Do List.
 *
 * Gère l'état global de l'application incluant les tâches, les catégories et le filtrage.
 * Permet d'ajouter des catégories, créer des tâches, filtrer les tâches par catégorie,
 * marquer les tâches comme complétées et les supprimer.
 *
 * @component
 * @returns {JSX.Element} L'interface principale de la To-Do List avec formulaires et liste des tâches.
 */
import {useEffect, useState} from 'react'
import './App.css'
import * as api from './services/api';
import FormCategory from './components/FormCategory';
import FormTask from './components/FormTask';
import TasksList from './components/TasksList';
import CategoryFilter from './components/CategoryFilter';
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import AlertError from "./components/AlertError.jsx";

function App() {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                //GET categories
                const categoriesResponse = await api.fetchCategories();
                setCategories(categoriesResponse);
                console.log("Categories fetched successfully:",categoriesResponse);

                //GET tasks
                const tasksResponse = await api.fetchTasks();
                console.log('Tasks response:', tasksResponse);
                setTasks(tasksResponse);
                console.log("Tasks fetched successfully:",tasksResponse);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);

            } finally {
                setIsLoading(false);
            }

        };
        fetchData();
    },  [])
    /**
     * Ajoute une nouvelle catégorie à la liste des catégories.
     *
     * @param {string} newCategory - Le nom de la nouvelle catégorie à ajouter.
     * @returns {void}
     */
    const addCategory = async (newCategory) => {
        setError(null);
        try {
            console.log('Creating category:', newCategory);
            const response = await api.createCategory(newCategory);
            console.log('Response:', response.data);
            setCategories([...categories, response]);
        } catch (error) {
            console.error('Error creating category:', error.response?.data);
            const errorMsg = error.response?.data?.name?.[0] || error.message;
            setError({
                title: "Erreur catégorie",
                message: errorMsg
            });
        }

    }

    /**
     * Ajoute une nouvelle tâche à la liste des tâches.
     *
     * @param {Object} newTask - L'objet tâche à ajouter.
     * @returns {void}
     */
    const addTask = async (newTask) => {
        setError(null);

        try {
            console.log('Creating task:', newTask);

            const taskData = {
                description: newTask.description,
                category_id: newTask.category,
                is_completed: newTask.is_completed
            }
            const response = await api.createTask(taskData);
            console.log('Response:', response);
            setTasks([...tasks, response]);
        } catch (error) {
            console.error('Error creating task:', error.response?.data);
            const errorMsg = error.response?.data?.description?.[0] || error.message;
            setError({
                title: "Erreur tâche",
                message: errorMsg
            });
        }

    }

    /**
     * Supprime une tâche de la liste des tâches.
     *
     * @param {Object} task - L'objet tâche à supprimer.
     * @returns {void}
     */
    const removeTask = async (task) => {
        setError(null);

        try {
            await api.deleteTask(task.id);
            setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
        } catch (error) {
            console.error('Error deleting task:', error.response?.data);
            const errorMsg = error.response?.data?.detail || error.message;
            setError({
                title: "Erreur suppression",
                message: errorMsg
            });
        }

    }

    /**
     * Définit la catégorie à filtrer pour afficher les tâches.
     *
     * @param {string} category - La catégorie sélectionnée pour le filtrage.
     * @returns {void}
     */
    const filterByCategory = (category) => {
        console.log('filterByCategory called with:', category, typeof category);
        setFilterCategory(category);
    }

    /**
     * Inverse le statut 'completed' d'une tâche donnée dans l'état des tâches.
     *
     * @param {Object} task - L'objet tâche à modifier.
     * @returns {void}
     */
    const toggleTaskCompleted = async (task) => {
        setError(null);

        try {
            const response = await api.updateTask(task.id, {
                is_completed: !task.is_completed
            });
            setTasks(prevTasks =>
                prevTasks.map(t => t.id === task.id ? response : t));
        } catch (error) {
            console.error('Error updating task:', error.response?.data);
            const errorMsg = error.response?.data?.detail || error.message;
            setError({
                title: "Erreur mise à jour",
                message: errorMsg
            });
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Ma To-Do List par Catégories</h1>

            {isLoading && <LoadingSpinner  message="Chargement des données..."/>}


            {/* AlertError */}
            {error && !isLoading && (
                <AlertError
                    title={error.title || "Erreur"}
                    message={error.message || error}
                    onClose={() => setError(null)}
                />
            )}


            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <FormCategory
                        categories={categories}
                        addCategory={addCategory}
                    />

                    <CategoryFilter
                        categories={categories}
                        filterCategory={filterCategory}
                        onFilterChange={filterByCategory}
                    />

                    <FormTask
                        categories={categories}
                        addTask={addTask}
                    />
                </div>
            </div>

            <TasksList
                tasks={tasks}
                filterCategory={filterCategory}
                toggleTaskCompleted={toggleTaskCompleted}
                removeTask={removeTask}
            />

        </div>
    )
}

export default App

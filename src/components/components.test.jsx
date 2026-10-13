// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import FormCategory from "./FormCategory";
import FormTask from "./FormTask";
import TaskItem from "./TaskItem";

afterEach(cleanup);

describe("FormCategory", () => {
    it("submits the category name and clears the input", () => {
        const addCategory = vi.fn();
        render(<FormCategory addCategory={addCategory} />);

        const input = screen.getByPlaceholderText("Nouvelle catégorie");
        fireEvent.change(input, { target: { value: "Courses" } });
        fireEvent.click(screen.getByRole("button", { name: "Ajouter catégorie" }));

        expect(addCategory).toHaveBeenCalledWith("Courses");
        expect(input.value).toBe("");
    });
});

describe("FormTask", () => {
    it("submits the task details and clears the input", () => {
        const addTask = vi.fn();
        const categories = [
            { id: 1, name: "Travail" },
            { id: 2, name: "Personnel" },
        ];
        render(<FormTask categories={categories} addTask={addTask} />);

        const input = screen.getByPlaceholderText("Nouvelle tâche");
        fireEvent.change(input, { target: { value: "Terminer les tests" } });
        fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });
        fireEvent.click(screen.getByRole("button", { name: "Ajouter" }));

        expect(addTask).toHaveBeenCalledWith({
            description: "Terminer les tests",
            category: 2,
            is_completed: false,
        });
        expect(input.value).toBe("");
    });
});

describe("TaskItem", () => {
    it("calls the completion and deletion callbacks with the task", () => {
        const task = {
            id: 7,
            description: "Terminer les tests",
            category: { name: "Travail" },
            is_completed: false,
        };
        const toggleTaskCompleted = vi.fn();
        const removeTask = vi.fn();
        render(
            <TaskItem
                task={task}
                toggleTaskCompleted={toggleTaskCompleted}
                removeTask={removeTask}
            />,
        );

        fireEvent.click(screen.getByRole("checkbox"));
        fireEvent.click(screen.getByRole("button", { name: "Supprimer" }));

        expect(toggleTaskCompleted).toHaveBeenCalledWith(task);
        expect(removeTask).toHaveBeenCalledWith(task);
    });
});

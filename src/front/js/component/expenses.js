import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ImagenAmpliadaModal } from "../component/imagenAmpliadaModal.js";
import { EditExpense } from "../component/editExpense.js";
import "../../styles/index.css";

export const Expenses = ({ theid }) => {
    const { store, actions } = useContext(Context);
    const [expensesList, setExpensesList] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedExpenseid, setSelectedExpenseid] = useState(null);

    useEffect(() => {
        const fetchExpensesList = async () => {
            const fetchedExpenses = await actions.getExpensesList(theid);
            setExpensesList(fetchedExpenses.expenses);
        };
        fetchExpensesList();
    }, [theid, actions]);

    const handleDeleteExpense = (expenseId) => {

        const fetchDeleteExpense = async () => {
            const result = await actions.deleteExpense(expenseId);
            console.log(result);
            const fetchExpensesList = async () => {
                const fetchedExpenses = await actions.getExpensesList(theid);
                setExpensesList(fetchedExpenses.expenses);
            };
            fetchExpensesList();
        };
        fetchDeleteExpense();

    };

    if (!expensesList) return <div>Loading...</div>;

    return (
        <div className="flex-grow-1 m-3 bg-c2 group-detail">
            <ImagenAmpliadaModal imageURL={selectedImage} />
            <EditExpense expenseid={selectedExpenseid} onDeleteExpense={() => handleDeleteExpense(selectedExpenseid)} />

            <h2 className="text-light pt-3 " ><strong className="bg-c3 px-5 rounded pb-1">Gastos</strong></h2>
            <div className="mx-4 mt-4">
                {expensesList.map((expense, index) => (
                    <button key={index} className="rounded-0 button-no balance d-flex align-items-center justify-content-between my-1 px-3 text-light btn" data-bs-toggle="modal" data-bs-target="#editExpenseModal" onClick={() => setSelectedExpenseid(expense.id)}>
                        <div className="text-start">
                            <h5 className="">{expense.title}</h5>
                            <p>Pagado por <strong>{expense.paidFor}</strong> el {expense.date}</p>
                        </div>
                        <h5 className="ps-2">{expense.amount}€</h5>
                        {expense.imageURL && (
                            <div>
                                <button
                                    className="btn button-no"
                                    data-bs-toggle="modal"
                                    data-bs-target="#imagenAmpliadaModal"
                                    onClick={() => setSelectedImage(expense.imageURL)}
                                >
                                    <img src={expense.imageURL} alt={expense.title} className="imagen-gasto" />
                                </button>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

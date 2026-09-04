const AlertError = ({
                        message = "Une erreur est survenue",
                        onClose,
                        title = "Erreur"
                    }) => {
    return (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="text-red-800 font-bold mb-1 flex items-center gap-2">
                        <span>⚠️</span>
                        {title}
                    </h4>
                    <p className="text-red-700 text-sm">{message}</p>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="text-red-600 hover:text-red-800 font-bold text-xl"
                        aria-label="Fermer"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default AlertError;
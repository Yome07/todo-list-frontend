const LoadingSpinner = ({ message = "Chargement en cours..." }) => {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <div className="text-center">
                {/* Spinner animé */}
                <div className="inline-block animate-spin mb-4">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full"></div>
                </div>
                {/* Message */}
                <p className="text-gray-500 text-sm">{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
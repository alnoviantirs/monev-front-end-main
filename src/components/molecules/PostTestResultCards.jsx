import { ResultCard } from "../atoms/ResultCard";

export const PostTestResultCards = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-500 rounded-lg p-6 h-48 flex flex-col justify-center items-center">
                    <h2 className="text-white text-2xl font-semibold">Passed</h2>
                    <p className="text-white text-2xl">300</p>
                </div>
                <div className="bg-yellow-400 rounded-lg p-6 h-48 flex flex-col justify-center items-center">
                    <h2 className="text-black text-2xl font-semibold">Failed</h2>
                    <p className="text-black text-2xl">28</p>
                </div>
            </div>
        </div>
    );
};

import { FC, useState } from "react";

export const Switch: FC = ({ children }) => {
    const [active, setActive] = useState(false);

    return (
        <label className="flex items-center gap-x-4" onClick={() => setActive(!active)}>
            <div className={`cursor-pointer border border-gray-400 rounded-full w-10 outline-none`}>
                <div
                    className={`block self-center w-5 h-5 rounded-full transition-transform duration-300 ${
                        active ? "translate-x-full bg-blue-500" : "translate-x-0 bg-gray-400"
                    }`}
                />
            </div>
            {children}
        </label>
    );
};

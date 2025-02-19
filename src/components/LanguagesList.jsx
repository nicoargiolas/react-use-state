import languages from "../../public/data/languages.js";
import Language from "./Language.jsx";
import { useState } from 'react';

export default function LanguagesList() {
    const [isSelected, setIsSelected] = useState(null);

    return (
        <div>
            <div className="buttons-list">
                {languages.map(item => (
                    <button
                        key={item.id}
                        className={`btn ${isSelected === item.id ? "active" : ""}`}
                        onClick={() => setIsSelected(item.id)}>
                        {item.title}
                    </button>
                ))}
            </div>

            <Language
                title={languages.find(item => item.id === isSelected)?.title}
                description={languages.find(item => item.id === isSelected)?.description}
            />
        </div>
    );
}
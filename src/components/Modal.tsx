import React from "react";

interface Props {
    email?: string;
    password?: string;
    colour?: string;
    animals?: string[];
    tiger?: string;
    setSubmit: (value: boolean) => void;
}

const Modal: React.FC<Props> = ({
    email,
    password,
    colour,
    animals,
    tiger,
    setSubmit,
}) => {
    return (
        <div className="modal">
            <div className="modal-inner">
                <h3>Submission successful!</h3>
                <p>{email}</p>
                <p>{password}</p>
                <p>{colour}</p>
                {animals && (
                    <ul>
                        {animals.map((animal, i) => (
                            <li key={i}>{animal}</li>
                        ))}
                    </ul>
                )}
                {tiger && <p>{tiger} tiger</p>}
                <button onClick={() => setSubmit(false)}>Close</button>
            </div>
        </div>
    );
};

export default Modal;

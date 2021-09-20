import React, { useState } from "react";

const Form: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [colour, setColour] = useState<string>("blue");
    const [animals, setAnimals] = useState<string[]>([]);
    const [tiger, setTiger] = useState<string>("");

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target;
        let updated = [];

        if (animals.includes(name))
            updated = animals.filter((animal) => animal !== name);
        else updated = [...animals, name];

        setAnimals(updated);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:{" "}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Colour:{" "}
                    <select
                        value={colour}
                        onChange={(e) => setColour(e.target.value)}
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="brown">Brown</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Animal:</label>
                <br />
                <label htmlFor="bear">Bear</label>
                <input
                    type="checkbox"
                    id="bear"
                    name="bear"
                    checked={animals.includes("bear")}
                    onChange={handleCheck}
                />
                <label htmlFor="tiger">Tiger</label>
                <input
                    type="checkbox"
                    id="tiger"
                    name="tiger"
                    checked={animals.includes("tiger")}
                    onChange={handleCheck}
                />
                <label htmlFor="snake">Snake</label>
                <input
                    type="checkbox"
                    id="snake"
                    name="snake"
                    checked={animals.includes("snake")}
                    onChange={handleCheck}
                />
                <label htmlFor="donkey">Donkey</label>
                <input
                    type="checkbox"
                    id="donkey"
                    name="donkey"
                    checked={animals.includes("donkey")}
                    onChange={handleCheck}
                />
            </div>
            {animals.includes("tiger") && (
                <div>
                    <label>
                        Type of tiger:{" "}
                        <input
                            type="email"
                            value={tiger}
                            required
                            onChange={(e) => setTiger(e.target.value)}
                        />
                    </label>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";

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
                <TextField
                    type="email"
                    label="Email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="password"
                    label="Password"
                    inputProps={{ minLength: 8 }}
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    select
                    label="Colour"
                    size="small"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                >
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="green">Green</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="black">Black</MenuItem>
                    <MenuItem value="brown">Brown</MenuItem>
                </TextField>
            </div>
            <div>
                <FormControl
                    sx={{ m: 1 }}
                    component="fieldset"
                    variant="standard"
                >
                    <FormLabel component="legend">Animal</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="bear"
                                    checked={animals.includes("bear")}
                                    onChange={handleCheck}
                                />
                            }
                            label="Bear"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="tiger"
                                    checked={animals.includes("tiger")}
                                    onChange={handleCheck}
                                />
                            }
                            label="Tiger"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="snake"
                                    checked={animals.includes("snake")}
                                    onChange={handleCheck}
                                />
                            }
                            label="Snake"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="donkey"
                                    checked={animals.includes("donkey")}
                                    onChange={handleCheck}
                                />
                            }
                            label="Donkey"
                        />
                    </FormGroup>
                </FormControl>
            </div>

            {animals.includes("tiger") && (
                <div className="input--tiger">
                    <TextField
                        type="email"
                        label="Type of tiger"
                        value={tiger}
                        size="small"
                        required
                        onChange={(e) => setTiger(e.target.value)}
                    />
                </div>
            )}
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Form;

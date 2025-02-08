import { useState } from 'react';
export default function useFormInput(initialValue) {
    const [value, setvalue] = useState(initialValue);

    function handleChage(event) {
        setvalue(event.target.value);
    }

    const inputProps = {    
        value,
        onChange: handleChage
    };

    return inputProps;
}

import useFormInput from '../../hooks/useFormInput';
export default function Form(){

    const firstNameProps = useFormInput('Kucas');
    const lastNameProps = useFormInput('Kaike');
    
    return(
        <>
            <label htmlFor="">
                First name:
                <input {...firstNameProps}  />
            </label>
            <label htmlFor="">
                Last name:
                <input {...lastNameProps} />
            </label>
            <p><b>Bom dia,{firstNameProps.value} {lastNameProps.value}</b></p>
        </>
    )
}
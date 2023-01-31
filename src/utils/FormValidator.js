import { useCallback, useState } from "react";

function FormValidator() {
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
  
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest(".pop-up__form").checkValidity());
    };
  
    const resetForm = useCallback(
      (newErrors = {}, newIsValid = false) => {
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setErrors, setIsValid]
    );
  
    return { handleChange, errors, isValid, resetForm };
  }

export default FormValidator;
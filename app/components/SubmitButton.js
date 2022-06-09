import React from 'react';
import AppButton from "./AppButton";
import colors from "../config/colors";
import {useFormikContext} from "formik";

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();
    return (
        <AppButton title={title} color={colors.primary} onPress={handleSubmit}/>
    );
}

export default SubmitButton;
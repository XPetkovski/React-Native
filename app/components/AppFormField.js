import React from 'react';
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormField({name, width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                // keyboardType="email-address"
                // autoCorrect={false}
                // autoCapitalize="none"
                // icon="email"
                onChangeText={handleChange(name)}
                width={width}
                // placeholder="email"
                // textContentType="emailAddress"
                onBlur={() => setFieldTouched(name)}
                {...otherProps}/>

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;
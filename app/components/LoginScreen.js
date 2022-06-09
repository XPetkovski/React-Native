import React from 'react';
import {StyleSheet, Image} from "react-native";
import Screen from "../screens/Screen";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import colors from "../config/colors";
import {Formik} from "formik";
import * as Yup from 'yup';
import AppText from "./AppText/AppText";
import ErrorMessage from "./ErrorMessage";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}/>

            <AppForm initialValues={{email: "", password: ""}}
                     onSubmit={values => console.log(values)}
                     validationSchema={validationSchema}>
                <AppFormField
                    name="email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    icon="email"
                    placeholder="email"
                    textContentType="emailAddress"
                />
                {/*<AppText style={{color: 'red'}}>*/}
                {/*    /!*<ErrorMessage error={errors.email} visible={touched.email}/>*!/*/}
                {/*</AppText>*/}
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    // onBlur={() => setFieldTouched("password")}
                    // onChangeText={handleChange("password")}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"/>
                <SubmitButton title="Login"/>
                {/*<AppButton title="Login" color={colors.primary} onPress={handleSubmit}/>*/}
                {/*{({handleChange, handleSubmit, errors, setFieldTouched, touched})*/}
                {/*{() => (*/}
                {/*    <React.Fragment>*/}
                {/*        */}
                {/*    </React.Fragment>*/}
                {/*)} ova ne treba bidejki imame AppForm komponenta */}
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50
    }
})

export default LoginScreen;
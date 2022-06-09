import React from 'react';
import {Text} from 'react-native';
import defaultStyles from "./Styles";

// <Heading> MY HEADING </Heading>
function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    );
}


export default AppText;
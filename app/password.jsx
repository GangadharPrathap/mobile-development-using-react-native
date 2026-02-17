import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

export default function PasswordField() {
  const [password, setPassword] = useState("");

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  const isValid =
    hasMinLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar;

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        mode="outlined"
      />

      <HelperText type={hasMinLength ? "info" : "error"} visible>
        • Minimum 8 characters
      </HelperText>

      <HelperText type={hasUpperCase ? "info" : "error"} visible>
        • At least one uppercase letter
      </HelperText>

      <HelperText type={hasLowerCase ? "info" : "error"} visible>
        • At least one lowercase letter
      </HelperText>

      <HelperText type={hasNumber ? "info" : "error"} visible>
        • At least one number
      </HelperText>

      <HelperText type={hasSpecialChar ? "info" : "error"} visible>
        • At least one special character
      </HelperText>

      <HelperText type={isValid ? "info" : "error"} visible>
        {isValid ? "Password is strong ✅" : "Password does not meet requirements"}
      </HelperText>
    </View>
  );
}

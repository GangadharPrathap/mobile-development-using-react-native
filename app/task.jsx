import React, { useState } from "react";
import { View,StyleSheet,FlatList } from "react-native";
import { TextInput, Button, Chip } from "react-native-paper";

// export default function PasswordField() {
//   const [password, setPassword] = useState("");

//   const hasMinLength = password.length >= 8;
//   const hasUpperCase = /[A-Z]/.test(password);
//   const hasLowerCase = /[a-z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const hasSpecialChar = /[!@#$%^&*]/.test(password);

//   const isValid =
//     hasMinLength &&
//     hasUpperCase &&
//     hasLowerCase &&
//     hasNumber &&
//     hasSpecialChar;

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         label="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         mode="outlined"
//       />

//       <HelperText type={hasMinLength ? "info" : "error"} visible>
//         • Minimum 8 characters
//       </HelperText>

//       <HelperText type={hasUpperCase ? "info" : "error"} visible>
//         • At least one uppercase letter
//       </HelperText>

//       <HelperText type={hasLowerCase ? "info" : "error"} visible>
//         • At least one lowercase letter
//       </HelperText>

//       <HelperText type={hasNumber ? "info" : "error"} visible>
//         • At least one number
//       </HelperText>

//       <HelperText type={hasSpecialChar ? "info" : "error"} visible>
//         • At least one special character
//       </HelperText>

//       <HelperText type={isValid ? "info" : "error"} visible>
//         {isValid ? "Password is strong ✅" : "Password does not meet requirements"}
//       </HelperText>
//     </View>
//   );
// }
/*       text input collects the data and button press to make it a chip set and then  */


export default function ChipInput() {
  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);

  const addChip = () => {
    if (text.trim() !== "" && chips.length < 10) {
      setChips([...chips, text.trim()]);
      setText("");
    }
  };

  const removeChip = (index) => {
    const updated = chips.filter((_, i) => i !== index);
    setChips(updated);
  };

  const isDisabled = chips.length >= 10;

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          mode="outlined"
          label="Enter value"
          value={text}
          onChangeText={setText}
          style={styles.input}
          disabled={isDisabled}
        />
        <Button
          mode="contained"
          onPress={addChip}
          disabled={isDisabled}
          style={styles.button}
        >
          Add
        </Button>
      </View>

      <FlatList
        data={chips}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        renderItem={({ item, index }) => (
          <Chip
            style={styles.chip}
            onClose={() => removeChip(index)}
          >
            {item}
          </Chip>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
  chip: {
    margin: 5,
  },
});

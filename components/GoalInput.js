import React, {useState} from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  return (
    <Modal visible={props.visible} animationType="slide">
        <LinearGradient style={{flex: 1}} colors={["#ed4264", "#ffedbc"]}>
      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Your Goal"
            style={styles.input}
            onChangeText={val => setEnteredGoal(val)}
            value={enteredGoal}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="ADD"
                onPress={() => {
                  props.onAddGoal(enteredGoal);
                  setEnteredGoal("");
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => {
                  props.onCancelAddGoal();
                  setEnteredGoal("");
                }}
              />
            </View>
          </View>
      </View>
        </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    margin: 10,
    borderRadius: 10,
    width: "40%"
  }
});

export default GoalInput;

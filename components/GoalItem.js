import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight
} from "react-native"

const GoalItem = props => (
  <TouchableNativeFeedback
    activeOpacity={0.8}
    style={{borderRadius: 10}}
  >
    <View style={styles.listItem}>
      <TouchableOpacity
        style={{flexDirection: "row", alignItems: 'center'}}
        onPress={() => props.onToggleComplete(props.item.key)}
      >
        <View
          style={[
            styles.circle,
            props.item.completed
              ? styles.completeCircle
              : styles.incompleteCircle
          ]}
        ></View>
        <Text
          style={[
            styles.goalText,
            props.item.completed ? styles.linethrough : styles.noLine
          ]}
        >
          {props.item.value}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor="#ddd"
        activeOpacity={0.8}
        onPress={() => props.removeGoal(props.item.key)}
        style={styles.deletePress}
      >
        <Text style={styles.deleteButton}>X</Text>
      </TouchableHighlight>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderColor: "#777",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    borderRadius: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    marginRight: 20
  },
  completeCircle: {
    borderColor: "#bbb",
    backgroundColor: "#bbb"
  },
  incompleteCircle: {
    borderColor: "#DA4453"
  },
  linethrough: {
    textDecorationLine: "line-through",
    color: "#999"
  },
  noLine: {
    textDecorationLine: "none",
  },
  goalText: {
    fontSize: 18
  },
  deletePress: {
    padding: 3,
    borderRadius: 50
  },
  deleteButton: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "red",
    borderRadius: 15,
    backgroundColor: "lightpink"
  }
});

export default GoalItem;

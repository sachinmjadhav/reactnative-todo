import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = val => {
    if (val === "") return;
    setCourseGoals(curr => [
      ...curr,
      {key: Math.random().toString(), value: val, completed: false}
    ]);
    setIsAddMode(false);
  };

  onCancelAddGoal = () => setIsAddMode(false);

  const removeGoal = id => {
    const filteredGoals = courseGoals.filter(goal => goal.key !== id);
    setCourseGoals(filteredGoals);
  };

  onToggleComplete = id => {
    const filteredGoals = courseGoals.map(goal => {
      goal.key === id ? goal.completed = !goal.completed : goal.completed;
      return goal
    })
    setCourseGoals(filteredGoals)
  }

  return (
    <LinearGradient style={{flex: 1}} colors={["#DA4453", "#89216B"]}>
      <View style={styles.container}>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancelAddGoal={onCancelAddGoal}
        />
        <Button
          title="Add Goal"
          color="#8A2BE2"
          onPress={() => setIsAddMode(true)}
        />
        {courseGoals.length < 1 && (
          <View style={styles.text}>
            <Text style={{color: "#fff"}}>
              Nothing here. Add More Goals...
            </Text>
          </View>
        )}
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem item={itemData.item} removeGoal={removeGoal} onToggleComplete={onToggleComplete} />
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 30
  },
  text: {
    padding: 10,
    marginVertical: 10,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10
  }
});

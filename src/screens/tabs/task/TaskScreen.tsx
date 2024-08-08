import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Button from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const TaskScreen = () => {
  const [activeTab, setActiveTab] = useState("All Tasks");
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
  const bottomSheetRef = useRef(null);

  const tasksData = [
    {
      title: "Task 1",
      date: "July 13, 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "$15",
      status: "In Progress",
    },
    {
      title: "Task 2",
      date: "July 12, 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "$15",
      status: "On Review",
    },
    {
      title: "Task 3",
      date: "July 7, 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "$15",
      status: "Approved",
    },
    {
      title: "Task 4",
      date: "July 8, 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "$15",
      status: "In Progress",
    },
  ];

  const handleTaskPress = useCallback((task) => {
    setSelectedTask(task);
    setSheetVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
  }, []);

  const renderContent = () => {
    const filteredTasks =
      activeTab === "All Tasks"
        ? tasksData // Show all tasks
        : tasksData.filter((task) => task.status === activeTab); // Filter by status
  
    return filteredTasks.length ? (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>
          {filteredTasks.map((task, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTaskPress(task)}
            >
              <Animated.View
                style={styles.taskItem}
                entering={FadeInDown.duration(100).delay(100).springify()}
              >
                <View style={styles.Image}>
                  <Ionicons name="image-outline" size={24} color="#4769FE" />
                </View>
                <View style={styles.taskDetails}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Text style={styles.taskDate}>{task.date}</Text>
                </View>
                <View style={styles.status}>
                  <Text style={styles.taskStatus}>Status:</Text>
                  <Text
                    style={[
                      styles.taskStatusLabel,
                      task.status === "In Progress" && { color: "blue" },
                      task.status === "On Review" && { color: "#f5c242" },
                      task.status === "Approved" && { color: "green" },
                    ]}
                  >
                    {task.status}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    ) : (
      <View style={styles.contentContainer2}>
        <Text style={styles.contentText}>No tasks available</Text>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          {["All Tasks", "In Progress", "On Review", "Approved"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.button,
                  activeTab === tab && styles.activeButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={
                    activeTab === tab
                      ? styles.activeButtonText
                      : styles.buttonText
                  }
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </View>
      {renderContent()}
      {isSheetVisible && selectedTask && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          initialSnapIndex={2}
          onClose={handleClose}
          enablePanDownToClose={true}
          backdropComponent={({ style }) => (
            <TouchableOpacity
              style={[style, styles.backdrop]}
              activeOpacity={1}
              onPress={handleClose}
            />
          )}
        >
          <BottomSheetScrollView contentContainerStyle={styles.bottomSheetContent}>
            <View style={styles.imageContainer}>
            <View style={styles.Image2}>
              <Ionicons name="image-outline" size={24} color="#4769FE" />
              </View>
            </View>
            <Text style={styles.sheetTitle}>{selectedTask.title}</Text>
            <Text style={styles.sheetDescription}>
              Date: {selectedTask.date}
            </Text>
            <Text style={styles.sheetTask}>{selectedTask.desc}</Text>
            <Text style={styles.sheetStatus}>Status: {selectedTask.status}</Text>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    width: screenWidth,
    height: 50,
    margin: 10,
    alignItems: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  Image: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    backgroundColor: "#DAE1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 40,
    margin: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
  },
  activeButton: {
    backgroundColor: "#4769FE",
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    fontFamily: "WorkSans-Regular",
  },
  activeButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "WorkSans-Regular",
  },
  contentContainer: {
    width: screenWidth,
    alignItems: "center",
  },
  contentContainer2: {
    width: screenWidth,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    color: "#515151",
    fontFamily: "WorkSans-Medium",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginHorizontal: 20,
    padding: 14,
    marginBottom: 1,
    backgroundColor: "#FFF",
  },
  taskDetails: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  status: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  taskTitle: {
    fontFamily: "WorkSans-Medium",
    fontSize: 20,
  },
  taskDate: {
    fontFamily: "WorkSans-Medium",
    color: "#949494",
    fontSize: 14,
  },
  taskStatus: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#252525",
  },
  taskStatusLabel: {
    fontSize: 16,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#5E5E5E",
  },
  bottomSheetContent: {
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  Image2: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    backgroundColor: "#DAE1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
  },
  sheetDescription: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },
  sheetTask: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },
  sheetStatus: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "WorkSans-Medium",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  actionButtons: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default TaskScreen;


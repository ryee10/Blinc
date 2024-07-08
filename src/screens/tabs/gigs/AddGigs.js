import ButtonOutline from "@/src/components/ButtonOutline";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import { FadeInDown } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import Button from "@/src/components/Button";

const AddNewGig = () => {
  const [tags, setTags] = useState([
    "Inventory Management ",
    "SEO Optimization ",
    "User-friendly Interface ",
    "Data Security ",
    "Drag-and-Drop Builder ",
    "Template Marketplace ",
    "Collaboration Studio ",
  ]);

  const navigation = useNavigation();

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View entering={FadeInDown.duration(100).delay(300).springify()}>
        <Text style={styles.label}>Gig Title</Text>
        <TextInput style={styles.input} placeholder="Dolar Leather Handag For Women" />

        <Text style={styles.label}>Gig Descriptions</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="The perfect blend of style and functionality with our Dolar Leather Handbag. 
          Designed for the modern woman, this handbag is a versatile accessory for any occasion."
          multiline
          numberOfLines={4}
        />
        <Text style={styles.helperText}>
          *Description should not exceed 500 letters
        </Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Category</Text>
            <TextInput style={styles.input} placeholder="Category" />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Delivery in</Text>
            <TextInput style={styles.input} placeholder="Delivery in" />
          </View>
        </View>

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Revision</Text>
        <TextInput style={styles.input} placeholder="Revision" />

        <Text style={styles.label}>Gig Features</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>
                {tag}
                <Text onPress={() => removeTag(tag)}>| ✖</Text>
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.label}>Gig Images</Text>
        <Text style={styles.helperText}>*Max of 5MB and 5 images per gig</Text>
        <TouchableOpacity style={styles.imageUpload}>
          <Text>Insert Images</Text>
        </TouchableOpacity>
        <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
            className="pb-5" 
          >
            <Button title=" Add new gig" /* action={() => navigation.navigate("AddG")} */  />
      </Animated.View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
  },
  helperText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#6079FE",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 6  ,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: "white",
    fontSize: 18,
  },
  imageUpload: {
    height: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    justifyContent:'center',
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderStyle: 'dashed'
  },
 
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  cancelText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 6
  },
});

export default AddNewGig;

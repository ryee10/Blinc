import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome, Entypo, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTabBarVisibility } from "../../navigation/TabBarVisibilityContext"; 

const screenWidth = Dimensions.get('window').width;

const AccountSettings = () => {
    const navigation = useNavigation();
    const { setTextInputFocused } = useTabBarVisibility();

    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [website, setWebsite] = useState('');
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const handleSave = () => {
        console.log('Facebook:', facebook);
        console.log('Twitter:', twitter);
        console.log('LinkedIn:', linkedin);
        console.log('Website:', website);
        console.log('Skills:', skills);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '' && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const renderSkill = ({ item }) => (
        <View style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveSkill(item)}>
                <Text style={styles.removeTag}>×</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.titleContainer}>
                            <FontAwesome5 name="user-circle" size={22} color="#647CFF" /> 
                            <Text style={styles.title}>Account Settings</Text>
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Skills</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder='Skills'
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}
                                value={newSkill}
                                onChangeText={setNewSkill}
                                onSubmitEditing={handleAddSkill}
                            />
                        </View>
                        <FlatList
                            data={skills}
                            renderItem={renderSkill}
                            keyExtractor={(item) => item}
                            horizontal
                            style={styles.skillsContainer}
                        />

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Social Media</Text>
                        </View>

                        <View style={styles.container2}>
                            <View style={styles.inputContainer4}>
                                <View style={styles.logoContainer}>
                                    <FontAwesome name="facebook" size={24} color="black" />
                                </View>
                                <TextInput 
                                    onFocus={() => setTextInputFocused(true)}
                                    onBlur={() => setTextInputFocused(false)}
                                    style={styles.inputContainer2}
                                    placeholder="Facebook Link"
                                    value={facebook}
                                    onChangeText={setFacebook}
                                />
                            </View>

                            <View style={styles.inputContainer4}>
                                <View style={styles.logoContainer}>
                                    <FontAwesome name="twitter" size={24} color="black" />
                                </View>
                                <TextInput 
                                    onFocus={() => setTextInputFocused(true)}
                                    onBlur={() => setTextInputFocused(false)}
                                    style={styles.inputContainer2}
                                    placeholder="Twitter Link"
                                    value={twitter}
                                    onChangeText={setTwitter}
                                />
                            </View>

                            <View style={styles.inputContainer4}>
                                <View style={styles.logoContainer}>
                                    <Entypo name="linkedin" size={24} color="black" />
                                </View>
                                <TextInput 
                                    onFocus={() => setTextInputFocused(true)}
                                    onBlur={() => setTextInputFocused(false)}
                                    style={styles.inputContainer2}
                                    placeholder="LinkedIn Link"
                                    value={linkedin}
                                    onChangeText={setLinkedin}
                                />
                            </View>

                            <View style={styles.inputContainer4}>
                                <View style={styles.logoContainer}>
                                    <Foundation name="web" size={24} color="black" />
                                </View>
                                <TextInput 
                                    onFocus={() => setTextInputFocused(true)}
                                    onBlur={() => setTextInputFocused(false)}
                                    style={styles.inputContainer2}
                                    placeholder="Website Link"
                                    value={website}
                                    onChangeText={setWebsite}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
                            <MaterialCommunityIcons name="update" size={30} color="#647CFF" /> 
                            <Text style={styles.updateText}>Update Information</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginStart: 5,
        fontWeight: 'bold',
        color: '#647CFF',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCC',
    },
    outerContainer: {
        width: screenWidth,
        alignItems: 'center',
        paddingBottom: 20,
    },
    innerContainer: {
        width: '95%',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    labelContainer: {
        flexDirection: 'row',
        paddingStart: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    label: {
        fontSize: 14,
        marginStart: 10,
    },
    container2: {
        width: 'auto',
        height: 'auto',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer1: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer2: {
        width: '80%',
        height: 50,
        borderRadius: 3,
        borderWidth: 0.2,
        paddingHorizontal: 10,
    },
    inputContainer4: {
        width: '80%',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        width: 50,
        height: 50,
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
    },
    buttonContainer: {
        width: '90%',
        height: 'auto',
        marginTop: 10,
        alignItems: 'flex-end',
    },
    updateButton: {
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#CBD3FF',
    },
    updateText: {
        fontSize: 15,
        marginStart: 5,
        color: '#647CFF',
    },
    skillsContainer: {
        flexWrap: 'wrap',
        height: 'auto',
        marginTop: 10,
        marginStart: 35,
        marginEnd: 35,
    },
    tag: {
        backgroundColor: '#E1E1E1',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagText: {
        fontSize: 14,
        color: '#333',
    },
    removeTag: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 10,
    },
});


export default AccountSettings;

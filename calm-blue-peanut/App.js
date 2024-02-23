import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [
        {
            title: '',
            content: ' ',
            image: require('./assets/zed.png')
        },
        {
            title: 'About me',
            content: 'Name: Zedrick Dhor Sartorio\nCourse: Bachelor of Science in Information Technology\n\nEducation:\n- Elementary: Marulas Elementary School (2014)\n- High School: Valenzuela Nation High School (2020)\n- College: Global Reciprocal Colleges (unknown)'
        },
        {
            title: '',
            content: 'About:\nHello, I\'m Zedrick Dhor D Sartorio, 21 years old and I\'m currently studying at GRC Global Reciprocal Colleges. My hobbies include watching anime, and sometimes I tutor on web designing because I want to explore web design. I also enjoy dancing and I am a member of GRC Descendant.\n\nProjects:\n(s)'
        }
    ];

    const handlePress = () => {
        setCurrentPage(currentPage === 3 ? 1 : currentPage + 1);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        {currentPage === 1 && (
                            <Image source={pages[currentPage - 1].image} style={styles.roundImage} />
                        )}
                        <Text style={currentPage === 1 ? styles.boldTitle : styles.title}>Zedrick Sartorio</Text>
                        <Text style={styles.content}>{pages[currentPage - 1].content}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentContainer: {
        alignItems: 'center',
        maxWidth: 600,
    },
    textContainer: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 35,
        marginBottom: 5,
        textAlign: 'center',
    },
    boldTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    content: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    roundImage: {
        width: 200,
        height: 200,
        borderRadius: 100, // half of width and height to make it round
        marginBottom: 20,
    },
});

export default App;

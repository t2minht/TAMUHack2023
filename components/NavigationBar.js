import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'

const NavigationBar = (props) => {
    return (
        <View style={styles.footerTagStyle}>
            <View style={styles.buttonContainer}>
                <Icon3.Button name='home-outline' backgroundColor={'#F17F7F'} size={45}></Icon3.Button>
                <Icon.Button name='file-text-o' backgroundColor={'#F17F7F'} size={45}></Icon.Button>
                <Icon.Button name='building-o' backgroundColor={'#F17F7F'} size={45}></Icon.Button>
                <Icon2.Button name='wardrobe-outline' backgroundColor={'#F17F7F'} size={45}></Icon2.Button>
                <Icon3.Button name='people-outline' backgroundColor={'#F17F7F'} size={45}></Icon3.Button>
                <Icon3.Button name='settings-outline' backgroundColor={'#F17F7F'} size={45}></Icon3.Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerTagStyle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F17F7F',
        padding: 15,
        width: '100%',
        height: Platform.select({
            ios: 100,
            android: 70,
        }),
    }
});

export default NavigationBar;

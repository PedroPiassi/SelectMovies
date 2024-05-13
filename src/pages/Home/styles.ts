import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#242A32",
    },
    seactionHeader: {
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    header: {
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color: "#fff"
    },
    sourceBar: {
        backgroundColor: "#676860",
        height: 42,
        padding: 10,
        borderRadius: 16,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    input: {
        color: '#fff',
        width: '80%',
        paddingLeft: 15
    }
});
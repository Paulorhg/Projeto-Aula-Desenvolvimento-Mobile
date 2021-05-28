import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        alignSelf: "stretch",
        paddingVertical: 60,
        backgroundColor: "#EF7676",
        alignItems: "center",
    },

    textHeader: {
        fontSize: 30,
        fontWeight: "bold"
    },

    content:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold"
    },

    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
      },

    button: {
        padding: 50
    }
});
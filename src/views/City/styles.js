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
        marginTop: 80,
        alignItems: "center",
        flexDirection : "column",
        justifyContent: "flex-start"
    },

    content2:{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        flexDirection : "column",
        justifyContent: "flex-start"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold"
    },

    button: {
        padding: 50
    },

    buttomLogout:{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#EF7676",
    }
});
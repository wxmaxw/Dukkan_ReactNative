import React from "react";
import LottieView from "lottie-react-native";

function Loading(){
    return <LottieView style={{flex:1}} source={require("../../assets/LA.json")} autoPlay />;
}

export default Loading;
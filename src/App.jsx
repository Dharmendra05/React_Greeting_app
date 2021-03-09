import React from 'react'



function App(){
	const time = new Date(2021, 2, 28, 19).getHours();
   let wish = "";

const cssStyle = {};

if(time >= 1 && time < 12){
   wish = "Good Morning";
   cssStyle.color = "red";

}else if (time>=12 && time<19){
    wish = "Good Afternoon"
    cssStyle.color = "green";
}else{
	wish = "Good Night"
	cssStyle.color = "blue";
}


return (<div><h1>Hello Sir, <span style={cssStyle}>{wish}</span> </h1></div>);

}





export default App;
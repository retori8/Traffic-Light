import React,{useState} from "react";

export default function TrafficLight (){
    const [color, setColor] = useState(["red","yellow","green"]);
    return (
		<div className="container">
			<div className="trafficlight">
				<button id="red" onClick={()=>{setColor("red")}} style={{boxShadow:`0 0 40px 1px ${color=="red"? color:""}`}} className="lights"></button>
				<button id="yellow" onClick={()=>{setColor("yellow")}} style={{boxShadow:`0 0 40px 1px ${color=="yellow"? color:""}`}} className="lights"></button>
				<button id="green" onClick={()=>{setColor("green")}} style={{boxShadow: `0 0 40px 1px ${color=="green"? color:""}`}} className="lights"></button>
			</div>
			<div className="post"><button onClick={()=>{setColor.map((index) => {[index]})}} className="button"><strong>PUSH</strong></button></div>
		</div>
	);
};


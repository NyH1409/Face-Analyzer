import React from "react";
import { Button } from "../button/Button";
import "./style.css"


export const Information2 : React.FC<any> = ({data, state, page })=>{

    if(data.length === 0){
        return(
            <>
               { state && <div className="loader"></div> }
            </>
        )
    }
    else{
    return(
        <>
            <div className="ml-4">
            <table id="table">
                        <tr>
                            <td className="font-weight-bold text-warning"> <Button title="Age Range" /> </td>
                            <td className="font-weight-bold text-warning"><Button title="Beard" /></td>
                            <td className="font-weight-bold text-warning"><Button title="Eyeglasses" /></td>
                            <td className="font-weight-bold text-warning"><Button title="EyeOpen" /></td>
                            <td className="font-weight-bold text-warning"><Button title="Gender"/></td>
                        </tr>
                        <tr>
                            <td> 
                                <tr><span className="small">High : </span>{data[page].AgeRange.High}</tr>
                                <tr><span className="small">Low : </span> {data[page].AgeRange.Low}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Beard.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Beard.Value.toString()}</tr>
                            </td>     
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Eyeglasses.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Eyeglasses.Value.toString()}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].EyesOpen.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].EyesOpen.Value.toString()}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Gender.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Gender.Value.toString()}</tr>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-weight-bold text-warning"><Button title="MouthOpen"/></td>
                            <td className="font-weight-bold text-warning"><Button title="Mustache"/></td>
                            <td className="font-weight-bold text-warning"><Button title="Smile" /></td>
                            <td className="font-weight-bold text-warning"><Button title="Quality" /></td>
                            <td className="font-weight-bold text-warning"><Button title="Sunglasses" /></td>
                        </tr>
                        <tr>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].MouthOpen.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].MouthOpen.Value.toString()}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Mustache.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Mustache.Value.toString()}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Smile.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Smile.Value.toString()}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Brightness : </span>{data[page].Quality.Brightness}</tr>
                                <tr><span className="small">Sharpness : </span>{data[page].Quality.Sharpness}</tr>
                            </td>
                            <td> 
                                <tr><span className="small">Confidence : </span> {data[page].Sunglasses.Confidence}</tr>
                                <tr><span className="small">Value : </span>{data[page].Sunglasses.Value.toString()}</tr>
                            </td>
                        </tr>
                    </table>
            </div>
        </>
    )
    }
}
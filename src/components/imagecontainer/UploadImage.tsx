import React, { useState } from "react";
import "./style.css";
import AWS from "aws-sdk";
import { Information } from "../information/Information";
import log from "../AWS_function/function";
import { Information2 } from "../information/information2";
import logo from "./image/logoHei.webp"
import aws from "./image/Rekognition.png"


export const UploadImage : React.FC<{}> = () =>{

    const [file , setFile] = useState<string>("");
    const [bg , setBg] = useState<string>("white");
    const [info , setInfo] = useState<any>([]);
    const [state, setState] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    function DetectFaces(imageData:any) {
        const client = new AWS.Rekognition();
        const data:any = {
            Image:{
                Bytes: imageData
            },
            Attributes:["ALL"]
        }

        client.detectFaces(data, function (err, res) {
            if(err){
                console.log(err);
            }
            else{
                console.log(res.FaceDetails);
                setState(false)
                setBg("transparent")
                setInfo(res.FaceDetails)
            }
        })
    }

    function handleFile(e:any) {
        setInfo([])
        log();
        setFile(URL.createObjectURL(e.target.files[0]));
        setState(true)
        const file:any = e.target.files[0];
        
        const reader = new FileReader();
        reader.onload = (function (params:any) {
            return function (elt:any) {
                const img = document.createElement('img');
                let image:string = "";
                img.src = elt.target.result;
                let jpg:boolean = true;

                try {
                    image = atob(elt.target.result.split("data:image/jpeg;base64,")[1]);
                } catch (error) {
                    jpg = false;
                }
                if(jpg === false){
                    try {
                        image = atob(elt.target.result.split("data:image/png;base64,")[1]);
                    } catch (e) {
                        alert("Not an image file Rekognition can process");
                        return;
                    }
                }
                let length = image.length;
                const imageBytes = new ArrayBuffer(length);
                let ua = new Uint8Array(imageBytes);
                for (var i = 0; i < length; i++) {
                    ua[i] = image.charCodeAt(i);
                }
                
                DetectFaces(imageBytes);
            };
        })(file);

        reader.readAsDataURL(file)
    }
    let styles:any = {
        backgroundColor: bg
    }
    
    return(
        <>  
            <h3 className="text-center text-info mt-3">Face Analyzer</h3>
            <img src={logo} alt="" className="logo" />
            <img src={aws} alt="" className="logo2" />
           <div className="container mt-4 py-4 text-center" style={styles}>
                <label htmlFor="file" className="custom-file bg-info uploadFile text-center text-white">
                        Choose image ...
                        <input type="file" name="file" id="file" onChange={handleFile} className="custom-file-input"/>
                </label>
                {
                    info.length > 1 ? <p className="text-white font-weight-bold">All informations about face {page}</p> : null
                }
                <div className="container image-section">
                    <div className="image-container bg-info">
                        <img src={file} alt="" />
                        {
                            info.length != 0 ? info.map((elt:any, k:number)=>(<div key={k} className="cadre border-info text-info font-weight-bold" style={{ width: (elt.BoundingBox.Width*250).toString()+"px",
                                height: (elt.BoundingBox.Height*300).toString()+"px",
                                top: (elt.BoundingBox.Top*300).toString()+"px",
                                left: (elt.BoundingBox.Left*250).toString()+"px"}}>{k}</div>)) : null
                        }
                    </div>
                    <Information2 data={info} page={page} setPage={setPage}/>
                </div>
                <Information setBg={setBg} data={info} state={state} page={page} setPage={setPage}/>
           </div>
           <p className="text-center text-white mt-2">&copy; 2022 Designed by Ny Hasina VAGNO</p>
        </>
    )
}
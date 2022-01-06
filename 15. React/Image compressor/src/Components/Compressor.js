import React, { useState } from "react";

/*Javascript module to be run in the web browser for image compression.*/
import imageCompression from "browser-image-compression";

/*Including css file*/
import "./Compressor.css";

/*Importing Upload and Download Image Icon*/
import Download from "../Images/Download.png";
import Upload from "../Images/Upload.png";

/*Importing NavBar Component to create a Beautiful Navbar and Card Component from Bootstrap */
import { Card } from "react-bootstrap";



//This function will be exported to App.js
function Compressor() {
{/*compressLink: take value, setCompressLink : Put value */}
  const [compressedLink, setCompressedLink] = useState("");  {/* UseState: Alternative of Props here the data is declared inside the component
                                                              in Props the data is declared to parent component  */}
  const [originalImage, setOriginalImage] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [outputFileName, setOutputFileName] = useState("");

  //It will handle upload part of image
  function uploadLink(event) {
    //To get the image file which user had uploaded in the input field
    const imageFile = event.target.files[0];
    // Create a DOMString containing a URL that represents the imageFile
    setOriginalLink(URL.createObjectURL(imageFile));
    //Now set the original image link, name of output file and upload image state
    setOriginalImage(imageFile);
    setOutputFileName(imageFile.name);
    setUploadImage(true);
  }

  //This will be called when user clicks on Compress Button
  function click(e) {
    e.preventDefault();

    const options = {
      maxSizeMB: 3,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= originalImage.size / 1024) {
      alert("Bring a bigger image");
      return 0;
    }

    //this code will compress the original image
    let output;
    imageCompression(originalImage, options).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      setCompressedLink(downloadLink);
    });

    setClicked(true);
    return 1;
  }

  return (
    <div className="mainContainer">
      <div className="row mt-5">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          {uploadImage ? (
            <Card.Img
              className="image"
              variant="top"
              src={originalLink}
            ></Card.Img>
          ) : (
            <Card.Img
              className="uploadCard"
              variant="top"
              src={Upload}
            ></Card.Img>
          )}
          <div className="d-flex justify-content-center upload-btn-wrapper">
            <button class="btn btn-dark">Upload a file</button>
            <input
              type="file"
              accept="image/*"
              className="mt-2 btn btn-dark w-75"
              onChange={(event) => uploadLink(event)}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-4 col-sm-12 d-flex justify-content-center align-items-baseline">
          <br />
          {outputFileName ? (
            <button
              type="button"
              className=" btn btn-dark"
              onClick={(e) => click(e)}
            >
              Compress
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
          <Card.Img
            className="image"
            variant="top"
            src={compressedLink}
          ></Card.Img>
          {clicked ? (
            <div className="d-flex justify-content-center">
              <a
                href={compressedLink}
                download={outputFileName}
                className="mt-2 btn btn-dark w-75"
              >
                Download
              </a>
            </div>
          ) : (
            <Card.Img
              className="uploadCard"
              variant="top"
              src={Download}
            ></Card.Img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Compressor;

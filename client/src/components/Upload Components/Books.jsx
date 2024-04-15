import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./pdfcomp";
// import pdfUrl from "/1.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
export default function Books() {
  const [pdfvisibel, setPdfvisible]= useState(false);
  const [title, setTitle] = useState("");  //title of the pdf
  const [file, setFile] = useState("");         //pdf file
  const [thumbnail, setThumbnail] = useState("");     //thubmnail img 
  const [allImage, setAllImage] = useState(null);     //
  const [pdfFile, setPdfFile] = useState(null);
  const [category, setCategory] = useState(" ");
  const [uploadProgress, setUploadProgress] = useState(0);

  const divvisible = ()=> {
    setPdfvisible(true);
  }

  const handlecategory = (event) =>{
    setCategory(event.target.value)
  }
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("https://thepustak.vercel.app/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
   const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("thumbnail", thumbnail);
    formData.append("category",category);
    console.log(title, file , category);
  
    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          },
          withCredentials: false, onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        }
      );
  
      console.log(result);
      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
    } catch (error) {
      console.error("Error occured in uploading image: ", error);
    }
  };
  const showPdf = (pdf) => {
    setPdfFile(`https://thepustak.vercel.app/files/${pdf}`);
    console.log(`pdf loaded ${pdfFile}`);

    divvisible();
  };
  
  return (
    <div className="items-center h-screen p-4 bg-slate-200">
      <div className="flex justify-between  gap-40">

  <div className=" w-4/12 h-[500px] ">
    <div className="border-black border rounded-lg  mx-auto p-4 bg-white ">
    <form onSubmit={submitImage} className="flex flex-col space-y-4">
      <h4 className="text-lg font-bold">Contribute To The Pustak Club</h4>
      <input
        type="text"
        placeholder="Title"
        required
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <select value="selectedcategory" onChange={handlecategory} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black">
      {/* {!category && <option value="">Select an option</option>} */}
      <option value="">Select an option</option>
      <option name="Manga" id="Manga">Manga</option>
      <option name="Fiction" id="Fiction">Fiction</option>
      <option name="Non-Fiction" id="Non-Fiction">Non-Fiction</option>
      <option name="Learning" id="Learning">Learning</option>
      {/* <option name="" id=""></option> */}
      </select> 
      <input
        type="file"
        accept="application/pdf"
        required
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2"
      /> 
        <input
        type="file" 
        accept="image/*"
        required
        onChange={(e) => setThumbnail(e.target.files[0])}
        className="border p-2"
         />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
    <div>
  Upload progress: {uploadProgress}%
</div></div>
    <div className="mt-4 border-black border rounded-lg  mx-auto p-4 overflow-hidden overflow-x-scroll bg-white">
      <h4 className="text-lg mt-[-20px] bg-yellow-100 border-1 w-48 rounded-xl "> Recently Uploaded PDF:</h4>

      <div className="mt-2 flex h-[100px]">

        {allImage == null
          ? ""
          : allImage.map((data) => {
              return (
                <div key={data.title} className="h-auto m-4 bg-emerald-200 p-3 min-w-36">
                  <h6 className="font-medium">Title: {data.title}</h6>
                  <button
                    onClick={() => showPdf(data.pdf) && divvisible}
                    className="bg-green-500 text-white p-1 rounded-sm  mt-2">
                    Show Pdf
                  </button>
                </div>
              );
            })}
            <hr className=" mt-7 border-b-2 border-t-slate-300"/>
      </div>
    </div >

    
  </div>
  { pdfvisibel && <div className="bg-white rounded-lg p-2"><PdfComp size="small" className=" border-2" pdfFile={pdfFile}/></div>}
  </div>
</div>
  );
}

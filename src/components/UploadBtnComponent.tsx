'use client'
import { useState } from 'react'
import { blobUpload } from '@/utils/DataServices'; 

const ImageButton = () => {
//We Need a useState for our file
  const [file, setFile] = useState<File | null>(null);
//A function that Gets our File / Sets our file 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
      }
  };
  //A Function that Handles the submitting of file to our backend
  const handleSubmit = async (e: React.FormEvent) => {
      //Prevent default so our app doesn't reload on submitting
      e.preventDefault();
  
		  //Check if the file is inside of our state Variable
      if (!file) {
          alert('Please select a file to upload.');
          return;
      }
		  //A Unique file name so data isn't being overwritten in our blob
      const uniqueFileName = `${Date.now()}-${file.name}`;
		  
		  //New Form Data Object to append our file and file name
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', uniqueFileName);
  
		  //Finally passing that formData into our Backend
      const uploadedUrl = await blobUpload(formData);

      if (uploadedUrl) {
          console.log('File uploaded at:', uploadedUrl);
          // You can now store this URL in your component state or send it to your backend
      }
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="file" className="block text-sm font-semibold text-gray-700">
          Choose a file
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="mt-2 block w-full text-sm text-gray-700 border rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Upload
      </button>
    </form>
    </>
  )
}


export default ImageButton

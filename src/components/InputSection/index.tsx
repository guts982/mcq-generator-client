"use client";
import { setMcq, setMcqLoading } from '@/lib/redux/slices/globalSlice';
import { RootState } from '@/lib/redux/store';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const apiUrl = process.env.NEXT_PUBLIC_API_URL


const InputSection = () => {
    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const dispatch = useDispatch();
    const mcqLoading = useSelector((state:RootState)=>state.global.mcqLoading)

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        if(!selectedFile){
            setError("Please select a text file.")
            return;
        }

        let formData = new FormData()
        //@ts-ignore
        formData.append("file", selectedFile);
        dispatch(setMcqLoading(true));
        try{
            const res = await axios.post(
                        `${apiUrl}/mcq/generate-from-text`,
                        formData,
                        {
                            headers: {
                                // "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                                "Content-type": "multipart/form-data",
                            },      
                        }
                    )
        dispatch(setMcq(res.data as IMCQResponse))
        } catch(er:any){
            // console.log("Error Response: ",er);
            const detail = er.response.data.detail
            if( typeof(typeof(detail) == "string")) {
                // console.log("Str error:",detail);
                setError(detail)
            } else {
                // console.log("Array  error:",detail);
            }
        } finally {
            dispatch(setMcqLoading(false));
        }
       
       
       

    }

    const handleFileInput = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length )
            setSelectedFile(e.target.files[0])
        
    }

    useEffect(()=>{
        
    },[])


    return (
        <form 
        className='shadow-sm bg-white w-full  rounded-md p-10  max-w-[1400px]  min-w-[350px] flex flex-col gap-4 justify-start items-center '
          onSubmit={handleSubmit} encType='multipart-formdata'>
            
            <Input
                radius="sm"
                type='file'
                label="Select a text file"
                labelPlacement='outside'
                placeholder="Select a file"
                className=" text-lg "
                classNames={{
                    "label":"text-xl text-center",
                    input:[
                        "",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    inputWrapper:"border-2 border-blue-400 py-4 h-18 flex justify-between"
                }}
                variant="bordered"
                isInvalid={error!=""}
                isDisabled={mcqLoading}
                errorMessage={`${error}`}
                onChange={handleFileInput} 
        />
           
            <Button color="primary" type="submit" variant="shadow" 
            disabled={mcqLoading} isLoading={mcqLoading}  
            
            >
            Submit
            </Button>  
        </form>
    );
};

export default InputSection;
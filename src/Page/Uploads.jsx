import {useEffect, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import {storage} from "../config/firebaseConfig";
import { auth, db } from '../config/firebaseConfig';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const Uploads = () => {

    const {acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject} = useDropzone();

    const [thumb, setThumb] = useState(null)

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    useEffect(() => {
        if (acceptedFiles[0]) {
            const url = URL.createObjectURL(acceptedFiles[0])
            setThumb(url)
        }
    }, [acceptedFiles])

    const handelUpload = () => {
        const imageRef = ref(storage, `media/${acceptedFiles[0].path}`)

        const metadata = {
            customMetadata: {
                user: auth.currentUser.uid
            }
        };


        uploadBytes(imageRef , acceptedFiles[0]).then(querysnapshot=> {
            console.log('Fichier uploadé')
                getDownloadURL(querysnapshot.ref).then(url => {
                    console.log(url)
                    const uploadsImgByUser = collection(db, "uploadsImgByUser")
                    addDoc(uploadsImgByUser, {
                        image:url,
                        userId: auth.currentUser.email
                    }).then( () => {
                        window.alert("enregistrement effectué")
                    })
                })

        })
    }


    return (
        <section className="container">
            {thumb && (
                <div>
                    <img src={thumb} alt={'image uploadé'}/>
                </div>
            )}
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Déposer vos fichier ou cliquez pour le sélectioner</p>
            </div>
            {thumb && (
                <div>
                    <button className={'btn btn-full'} onClick={handelUpload}>Envoyer</button>
                </div>
            )}
        </section>
    )
}

export default Uploads
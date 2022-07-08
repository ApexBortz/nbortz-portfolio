// special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {

    return (
        <div>
            <h1> About Me </h1>

            <p className={styles.darkGreen}> Hi, Name is Nicholas Bortz and i am a software engineer! </p>
            {/* assumes youre in the public photo for image imports */}
            <Image src='/profile_picture.jpg' 
                   alt='profilephoto' 
                   width={300} 
                   height={300} />

            <div>
                <p> Some more about info </p>
            </div>
            
        </div>
    )
}


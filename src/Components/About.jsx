import React, { useEffect } from 'react'
import { Container, Row , Col  } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import photo from '../images/photo.jpg'
import { useState } from 'react'

const About = () => {
  const [loopNum , setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ " Web Developer " , " Software Engineer "];
  const [text,setText] = useState('');
  const [delta ,setDelta ] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
     
    let ticker = setInterval(() => {
         tick();
    }, delta)

    return () => { clearInterval(ticker)};

  }, [text])
  
  const tick = () => {

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0 , text.length - 1)  : fullText.substring(0 , text.length + 1 );
    
    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2);
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);

    }  

  } 

  return (
    <>
    <section>
      <Container className=' bg-blue-500 text-white pt-16  '>
        <Row className=' flex   '>
          <div className=' flex gap-52 mx-64  my-24 mb-32  '> 
            <div className=' text-xl mt-28  w-3/4  '>
               <span className='rounded-none inline-block overflow-hidden border-white border-2  px-4 py-2 mt-1 '>Welcome to my Portfolio</span>
               <h1 className='text-5xl mt-6 my-10 '>{`Hi , Im Dhwanit a `}<br/><span className='text-6xl  '>{text}</span>
               </h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis, labore maxime illum impedit eius. Suscipit possimus eum culpa ea iste nostrum reiciendis, tempora nisi totam optio at, sapiente voluptatibus fugiat harum natus tempore doloremque autem recusandae ipsum architecto vero, dolor quaerat! Nisi, placeat earum atque quos fuga sunt facilis debitis dolores, autem dignissimos voluptatibus voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reprehenderit cumque dolorum sapiente officiis aperiam consequatur distinctio similique nesciunt accusantium.</p>
                 <button onClick={() => console.log("connect")} className='flex  mt-10 '>My Resume <ArrowRightCircle className='mx-2 my-1 size-5'/></button>
            </div>
            <div >
             <img src={photo} alt="img" className='  rounded-3xl'/> 
            </div>
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About
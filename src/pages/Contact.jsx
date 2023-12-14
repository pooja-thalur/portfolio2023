import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';

import Animal from '../model/animal';
import Alert  from '../components/Alert';
import { Html } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import useAlert  from '../hooks/useAlert';
extend({ Animal})

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);

  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleFocus = () => {
    setCurrentAnimation('walk');
  };

  const handleBlur = () => {  
    setCurrentAnimation('idle');
    // if(form.name === '') {
    //   formRef.current.classList.remove('focus');
    // }
  };

  const handleSubmit = (e) => {  
      e.preventDefault();
      setIsLoading(true);
      setCurrentAnimation('hit');

      console.log("pub key",import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      console.log("service id",import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
      //this is an async operation; so call .went() on the promise
      //login to emailjs and add your own key and service id
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Pooja',
          from_email: form.email,
          to_email:'poojathalurdev@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false);
        showAlert({show:true, type: 'success', text: 'Message sent successfully! I will get back to you soon.'});


        setTimeout(() => {
          setCurrentAnimation('idle');
        }, [2000]);


        // show success msg 
        // show alert and hide it as well.
        setForm({name: '', email: '', message: ''});//clearing the form
        // alert('Message sent successfully! I will get back to you soon.');  
        
      }).catch((err) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.log(err);
        showAlert({show:true, type: 'danger', text: 'Something went wrong!! No problem, you can reach me at poojathalur@gmail.com'});
        // alert('Something went wrong, Please try again later.');
      });
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/> }
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'> Get in touch with Pooja Thalur!</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>Name</label>
          <input className='input w-full h-12 rounded-md px-4' type='text' name="name" placeholder='Your name' 
          required value={form.name} onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>

          <label className='text-black-500 font-semibold'>Email</label>
          <input className='input w-full h-12 rounded-md px-4' type='email' name="email" placeholder='Your email' 
         required 
         value={form.email} 
         onChange={handleChange}
         onFocus={handleFocus}
         onBlur={handleBlur}
         />
        

        <label className='text-black-500 font-semibold'>Message</label> 
        <textarea className='textarea rounded-md px-4' rows={4} name="message" placeholder='Your message to me...' 
         required 
         value={form.message} 
         onChange={handleChange}
         onFocus={handleFocus}
         onBlur={handleBlur}
         />

        <button className='btn btn-primary w-full h-12 rounded-md' 
        type="submit"
        disabled={isLoading}
        onFocus={handleFocus}
        onBlur={handleBlur}

        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        </form>
      </div>
      <div className='lg-w-1/2 w-full lg:h-auto md:h-[3000px] h-[400px] lg:mt-0 mt-14'>
        <Canvas
          camera = {{position: [0, 0, 5],
          fov : 75,
          near: 0.1,
          far: 1000
        }
          }
          >
            <directionalLight intensity={1.5} position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />

            {/* <Suspense fallback={<Loader/>}> */}
              <Animal 
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[13, -1.2, 0]}
              scale={[0.5, 0.5, 0.5]}
              />
            {/* </Suspense> */}
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
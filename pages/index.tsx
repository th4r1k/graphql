import type { NextPage } from 'next'
import { Router, useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { useCreateSubscriberMutation } from '../graphql/generated';


const Home: NextPage = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const router = useRouter();

  const [createSubscriber, {loading}] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    }
    );
    router.push("/Event")
  
  }
    

  return (
    <>
     <div className="h-screen overflow-hidden bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
      <div className="w-full max-w-[1100px] flex flex-col-reverse items-center justify-between mt-20 mx-auto sm:flex-row">
        <div className="max-w-[640px]">

          <h1 className="mt-8 tet-[2.5rem] leading-tight">
            Learn some <strong className="text-blue-500">Code</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Here you can find awesome videos to improve your code, all videos were selected from Youtube...
            This Form is just a code pratice your data will not be used, after submit you will be redirected to the content.
          </p>
        </div>
          
      <div className="p-8 bg-gray-700 border border-gray-500 rounded">
        <strong className="text-2xl mb-6 block">Subscribe! It is Free... </strong>
          
          <form onSubmit={handleSubscribe} action="" className="w-full flex flex-col gap-2" >
            <input
             className="bg-gray-900 rounded px-5 h-14" 
             type="text" 
             placeholder="Full name"
              onChange={event => setName(event.target.value)}
              required
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14" 
            type="email" 
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
            required
            />

            <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              I want to learn
            </button>
          </form>
          </div>
        </div>
        <img src="../code-mockup.png" className="mt-10" alt="" /> 
      
     </div>
    </>
  )
}

export default Home

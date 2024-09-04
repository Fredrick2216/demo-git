//import { useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
email: z.string().email(),
password : z.string().min(6,{message: "Invalid password"})
message: z.string().min(10,{message:"Add more"})

})

const Contactform =() =>{
    const { register,watch ,handleSubmit  } = useForm({
        resolver: zodResolver(schema), 
        defaultValues:{
            email:"leonardfredrick2203@gmail.com"
        }
         
    });
    
          console.log(watch("email"),watch("password"),watch("message"));

          const onSubmit =() => {
            console.log("Onsubmit-",data);
          };

          console.log(errors.email.message)

    return(
        <>
        <p>Contactform</p>
     <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} className="border border-red-500"/>
          {errors.email && <span className='text-red-400'>{errors?.email?.message}</span>}

           <input {...register("password")} className="border border-red-500"/>
           {errors.password && <span className='text-red-400'>{errors?.password?.message}</span>}
           <input {...register("message")} className="border border-red-500"/>
           {errors.message && <span className='text-red-400'>{errors?.message?.message}</span>}
           <input {...register("dob")} className="border border-red-500"/>
        
        <button type="submit">Submit</button>
     </form>
</> 
        
    )
}

export default Contactform


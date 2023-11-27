import React from 'react'

function Form() {
    return (
        <div className='form-container flex flex-col md:flex-row justify-between max-w-6xl my-4 mx-auto py-4 px-5 rounded-md bg-light-brown'>
            <div className="photo w-full md:w-1/2 object-cover mb-4 md:mb-0">
                <img src=".\images\Ditto.jpg" alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="form w-full md:w-1/2 m-4 my-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-light-coffee">Login</h1>
                <div>
                    <form className='flex flex-col'>
                        <label htmlFor="username" className='text-lg'>Username</label>
                        <input type="text" name='username' className='p-2 mb-4' />

                        <label htmlFor="password" className='text-lg'>Password</label>
                        <input type="password" name='password' className='p-2 mb-4' />
                        <button className='w-full bg-light-coffee my-1 p-2'>Submit</button>
                        <button className='w-full  bg-light-coffee my-1 p-2'>Register</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form
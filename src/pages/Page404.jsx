import React from 'react'

function Page404() {
  return (
    <div className='min-h-screen container text-9xl font-bold text-center mx-auto px-4 py-28 space-y-12'>
      <h1 className="text-5xl md:text-9xl font-bold text-balance">
        <span className="bg-linear-to-r from-[#00afb3] via-[#e65fde] to-[#00afb3] bg-clip-text text-transparent">
          404
        </span>
        <br />
        <span className="text-[#f3faff] text-5xl">Page not found</span>
      </h1>
    </div>
  )
}

export default Page404
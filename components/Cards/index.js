import { Children } from "react";


export default function Cards({description,icon}){
  return(
    <div className='min-h-full'>
      {/* <main className="cards ">
        <article className="card">
          <i>{icon}</i>
          <div className="text">
            {description}
          </div>
        </article>
        </main> */}  
        <div className="container mx-4 my-4">
          <div className="w-64 border rounded-l-lg">
          <i>{icon}</i>
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"> 
                {description}
              </h5>
            </div>
          </div>

        </div>

    </div>
  )
}
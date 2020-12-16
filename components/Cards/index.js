import { Children } from "react";


export default function Cards({description,icon}){
  return(
    <div className='container'>
      <main className="cards">
        <article className="card">
          <i>{icon}</i>
          <div className="text">
            {description}
          </div>
        </article>
        </main>

    </div>
  )
}
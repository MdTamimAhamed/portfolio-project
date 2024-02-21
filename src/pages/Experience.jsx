import Timeline from "../utils/Timeline"

function Experience() {

  const timelines = [
    {
      id:1, 
      when:'Current', 
      what:'University/Local/Personal Project', 
      where:'MERN Stack, UI/UX',
      status:'2+ years MERN'
    },
    {
      id:2, 
      when:'2020-Present', 
      what:'BSc. in Computer Science and Engineering', 
      where:'Daffodil International University',
      status:'Bangladesh, Dhaka'
    },
    {
      id:3, 
      when:'March 2018 - Present', 
      what:'Freelance Digital Artist & UI Designer', 
      where:'Fiverr.com',
      status:'Level Two'
    },
    {
      id:4, 
      when:'2017 - 2019', 
      what:'Higher Secondary Certificate (HSC) ', 
      status:'Bangladesh, Dhaka'
    },
  ]

  return (
    <div className="w-full relative h-auto mt-24 pb-6 rounded-2xl bg-white"> 
       {/* <div className="w-56 h-56 absolute -z-50 left-56 top-24 translate-x-[-50%] blur-[200px] bg-gradient-to-tl from-secondary to-primary rounded-full"></div> */}

      <div className="w-[768px] mx-auto p-8">
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Timeline</h1>
        {
          timelines.map((data)=>(
            <span key={data.id}>
                <Timeline
                  when={data.when}
                  what={data.what}
                  where={data.where}
                  status={data.status}
                />
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Experience
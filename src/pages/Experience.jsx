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
    <div className="w-full relative h-auto mt-10 pb-6 rounded-2xl bg-white"> 
       <div className="w-64 h-64 bg-gradient-to-br from-secondary to-primary rounded-full blur-[120px] opacity-50 absolute -top-10 -z-50"></div>
       <div className="w-72 h-72 bg-gradient-to-br from-secondary to-primary rounded-full blur-[120px] opacity-50 absolute right-40 bottom-10 -z-50"></div>

      <div className="px-8 lg:px-16 py-12">
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
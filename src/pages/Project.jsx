import OptionBtn from "../utils/OptionBtn"

function Project() {

    

  return (
    <>  <div className="w-full relative h-auto mt-24 pb-6 rounded-2xl bg-white"> 
            <div className="w-[768px] mx-auto p-8">
                <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Projects</h1>
                <div className="flex flex-wrap justify-start items-center gap-2">
                    <OptionBtn
                        name="All"
                        dropdown={false}
                    />
                    <OptionBtn
                        name="Web Projects"
                        dropdown={true}
                    />
                    <OptionBtn
                        name="UI Designs"
                        dropdown={true}
                    />
                    <OptionBtn
                        name="Other"
                        dropdown={false}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Project
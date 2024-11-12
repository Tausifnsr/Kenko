import YWave from '../assets/waveyellow.png'

function ProductTags() {
  return (
    <>
        <div>
        <h1 className="heading text-[22px] mt-20 mx-5 font-bold">Product Tags</h1>
              <img className="w-8 mx-5 mt-3" src={YWave} alt="" />
              <div className="mt-10 mx-5">
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Bottle Water</button>
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Filteration</button>
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Safety Tips</button>
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Hydration</button>
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Water Process</button>
                <button className="px-8 py-3 rounded-full text-[#999] bg-[#f3f9ff] mx-1 my-2 hover:bg-[#f5a934] hover:text-white transition:hover duration-500 ease-in-out text-[16px]">Minerals</button>
              </div>
        </div>
    </>
  )
}

export default ProductTags
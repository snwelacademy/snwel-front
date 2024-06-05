import { useSetting } from "@/hooks/useSettings"
import { SETTINGS } from "@/types"


const Logo = () => {
  const {data} = useSetting({code: SETTINGS.GENERAL})
  return (
    <span className='inline-block text-3xl font-bold text-primary rounded-full'>
      <img className="w-[120px] md:w-[170px]" src={data ? data.data.logoUrl : ""}/>
    </span>
  )
}

export default Logo
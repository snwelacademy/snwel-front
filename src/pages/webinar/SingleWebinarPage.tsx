
import SingleWebinar from "@/components/webinar/SingleWebinar";
import { WebinarContextProvider } from "@/components/webinar/WebinarContext";
import { getWebinar } from "@/services/admin/webinar-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"

const SingleWebinarPage = () => {
    const { slug } = useParams();
    const {data: webinar} = useQuery({
        queryKey: ['/admin/webinar', slug], 
        queryFn: () => getWebinar(slug||'')
      })
    if (!slug || !webinar) return <div className="flex items-center">Not Found!</div>
    return (
        <>
        <WebinarContextProvider>
           <SingleWebinar webinar={webinar} />
        </WebinarContextProvider>
        </>
    )
}

export default SingleWebinarPage
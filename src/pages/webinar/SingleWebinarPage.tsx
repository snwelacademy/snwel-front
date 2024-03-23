
import SingleWebinar from "@/components/webinar/SingleWebinar";
import { getWebinarBySlug } from "@/services/webinar-service";
import { useParams } from "react-router-dom"

const SingleWebinarPage = () => {
    const { slug } = useParams();
    const webinar = slug ? getWebinarBySlug(slug) : undefined;
    if (!slug || !webinar) return <div className="flex items-center">Not Found!</div>
    return (
        <>
           <SingleWebinar webinar={webinar} />
        </>
    )
}

export default SingleWebinarPage
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";


export async function getServerSideProps(HtmlContext:any){
  const slug = HtmlContext.query.slug;
  
  return {
    props:{
        slug,
      },
    }
  }


export default function Slug(slug:any) {
  return (
    <>
    <div className="w-screen overflow-x-hidden">
    <Header/>

    </div>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex flex-1 overflow-x-hidden">
        <Sidebar/>
        <Video lessonSlug={slug.slug}/>

      </main>
    </div>
    </>
  )
}

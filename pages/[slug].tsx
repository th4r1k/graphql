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
    <div className="w-screen">
    <Header/>

    </div>
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1">
        <Sidebar/>
        <Video lessonSlug={slug.slug}/>

      </main>
    </div>
    </>
  )
}

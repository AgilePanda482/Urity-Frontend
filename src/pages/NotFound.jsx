import NotFoundImage from '../assets/NotFoundImage.png'

function NotFound() {
    return (
        <div className="flex justify-center items-center h-screen bg-black ">
            <h1 className="text-white text-5xl font-bold text-center">Error 404 - NotFound</h1>
            <img className="absolute 2xl:bottom-0 right-0 w-1/3" src={NotFoundImage} alt="Cat not found" />
        </div>
    )
}
export default NotFound
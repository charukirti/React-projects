export default function ErrorMessage({errorMsg}) {

    return (
        <div className="text-center my-56  bg-errorBg w-52 sm:w-96 px-3 py-1 mx-auto rounded-lg">
            <span className="text-2xl text-white font-medium">{errorMsg}</span>
        </div>
    )
}


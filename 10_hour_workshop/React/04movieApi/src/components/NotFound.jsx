

function NotFound(){

    return(
        
        <div class="relative flex items-top flex-grow h-full  bg-red-100 sm:items-center sm:pt-0 max-w-6xl mx-auto mt-20 border border-red-500">
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        404
                    </div>
                    <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        Not Found
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
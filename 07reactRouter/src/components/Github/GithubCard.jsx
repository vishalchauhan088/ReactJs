import React from 'react'

function GithubCard(props) {
  return (
   

    <div
        class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto   bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
            <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img class="object-cover object-center h-32" src={props.data.avatar_url} alt='Woman looking front' />
        </div>
        <div class="text-center mt-2">
            <h2 class="font-semibold">{props.data.name}</h2>
            <h3 class="text-gray-500">{props.data.login}</h3>
            <p class="text-gray-500">{props.data.bio}</p>
        </div>
        <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li class="flex flex-col items-center justify-around">
                <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>{props.data.following }</div>
            </li>
            <li class="flex flex-col items-center justify-between">
                <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                </svg>
                <div>{props.data.followers}</div>
            </li>
            <li class="flex flex-col items-center justify-around">
                <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
                <div>{props.data.public_repos}</div>
            </li>
        </ul>
        <div class="p-4 border-t mx-8 mt-2">
            <button class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  my-3 focus:outline-none">Follow</button>
        </div>
    </div>
  )
}

export default GithubCard
Why Next.js?
-Routing
-Api routes
-Rendering
-Data Fetching
-Styling(inbult tailwindcss support)
-Optimization
-Dev and prod build system
-SEO

------------------------------------------------------


React Server Components
-Server Components
default
reading files
Fetching Data

------------------------------------------------------


-Client Components
"use client" at top
ability to use hooks and manage interactions

------------------------------------------------------

Routing

Routing Conventions

-All routes must be placed inside the app folder
-Every file that corresponds to a route must be named page.js or page.tsx
-Every folder corresponds to a path segment in the browser URL


------------------------------------------------------

File Based Routing




Nested routes
http://localhost:3000/blog/second

make blog inside app.tsx
make second folder inside blog folder and define page.tsx

------------------------------------------------------

Dynamic routes

http://localhost:3000/products/:id 


- make folder structure like products > [productid]
[productid] will be Dynamic

if you want params in server side every component recieves params as Props
 
but the params recieved directly in the props comes as promise


useParams() should be in client side Rendering

------------------------------------------------------

Nested Dynamic routes

http://localhost:3000/products/:id/review/:id

same structure implemented as dynamic routes

------------------------------------------------------

Catch-all Segements

http://localhost:3000/docs/f1/c1/r1

instead of making multiple files

you can make folder structure like docs > [...slug]

the ...slug will catch all the segments that has /docs/:id1/:id2/.... in url
but it doesn't catch /docs 


anyway if u want to show the same for /docs and any url that may be 404 not found

you can use [[...slug]]

------------------------------------------------------

Not Found page

app > not-found.tsx

it will be used as custom 404 oage instead of the default one 


for individual routes 
like lets say 
http://localhost:3000/products/:101 should be not found 
then use notFound from next/navigation using manual conditions

in next 14 you can take params as string

from next 15 useParams hook is returned as promise

so the type should be defined like 

interface Props {
  params: Promise<{
    productid: string;
  }>;
}

------------------------------------------------------

File Colocation

Private folder

- shouldnot considered by routing system
- prefix the name by _

- seaparte ui logic from routing logic
- organizing internal files
- sorting and grouping files in code editors
- avoiding potential naming conflicts with future Conventions

so if you want to lets say have a url
http://localhost:3000/_products

this don't make _products as it will be private folder

instead use "%5F" as prefix (like %5Fproducts)
which is URL encoded form of _

------------------------------------------------------


Route Groups

- Allows us to logically group our routes and project files without affecting URL path structure

- to group a lets say multiple components like register , login into auth section

use (auth) as folder to group the routes


------------------------------------------------------


Layouts

you can create a layout component by default exporting layout.tsx

------------------------------------------------------


Routing Metadata

export a static Metadata object

export a dynamic generateMetadata function


------------------------------------------------------

Link Based navigation

Link from next/link 

{usePathname} from next/navigation gives pathname like /register

------------------------------------------------------

Navigating Programmatically

useRouter hook from next/navigation

then router.push("/")

if u want to replace the history instead of pushing onto the stack

then use router.replace("/")

also router.back() will let us redirect to previous path in history stack

------------------------------------------------------

Templates

Templates are similar to layout in that they wrap each child or page

but templated can be shared between routes

but they don't carry state like Layouts

------------------------------------------------------

Loading.tsx


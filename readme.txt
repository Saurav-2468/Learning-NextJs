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
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage flex flex-col md:flex-row h-full">
      <div className="listContainer flex-1 md:w-3/4 h-full p-4">
        <div className="wrapper h-full flex flex-col gap-8 overflow-y-scroll pb-4">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => (
                <div className="flex flex-col gap-8">
                  {postResponse.data.map((post) => (
                    <Card
                      key={post.id}
                      item={post}
                      className="w-full h-[350px] md:h-[400px] lg:h-[450px] bg-white rounded-lg shadow-md p-6 mb-8"
                    />
                  ))}
                </div>
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer flex-2 md:w-1/4 h-full bg-gray-100 md:block hidden">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;

// import "./listPage.scss";
// import Filter from "../../components/filter/Filter";
// import Card from "../../components/card/Card";
// import Map from "../../components/map/Map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";

// function ListPage() {
//   const data = useLoaderData();

//   return (
//     <div className="listPage flex flex-col md:flex-row h-full">
//       <div className="listContainer flex-1 md:w-3/4 h-full p-4">
//         <div className="wrapper h-full flex flex-col gap-4 overflow-y-scroll pb-4">
//           <Filter />
//           <Suspense fallback={<p>Loading...</p>}>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading posts!</p>}
//             >
//               {(postResponse) => (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {postResponse.data.map((post) => (
//                     <Card
//                       key={post.id}
//                       item={post}
//                       className="w-full h-[350px] md:h-[400px] lg:h-[450px] bg-white rounded-lg shadow-md"
//                     />
//                   ))}
//                 </div>
//               )}
//             </Await>
//           </Suspense>
//         </div>
//       </div>
//       <div className="mapContainer flex-2 md:w-1/4 h-full bg-gray-100 md:block hidden">
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data.postResponse}
//             errorElement={<p>Error loading posts!</p>}
//           >
//             {(postResponse) => <Map items={postResponse.data} />}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default ListPage;

// import "./listPage.scss";
// import Filter from "../../components/filter/Filter";
// import Card from "../../components/card/Card";
// import Map from "../../components/map/Map";
// import { listData } from "../../lib/dummydata"; // Import your dummy data
// import { Suspense } from "react";

// function ListPage() {
//   // Use dummy data instead of useLoaderData
//   const data = listData;

//   return (
//     <div className="listPage">
//       <div className="listContainer">
//         <div className="wrapper">
//           <Filter />
//           {/* Display cards using dummy data */}
//           {data.map(item => (
//             <Card key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//       <div className="mapContainer">
//         {/* Display map with dummy data */}
//         <Map items={data} />
//       </div>
//     </div>
//   );
// }

// export default ListPage;

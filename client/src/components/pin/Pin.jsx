// import { Marker, Popup } from "react-leaflet";
// import "./pin.scss";
// import { Link } from "react-router-dom";

// function Pin({ item }) {
//   return (
//     <Marker position={[item.latitude, item.longitude]}>
//       <Popup>
//         <div className="popupContainer">
//           <img src={item.images[0]} alt="" />
//           <div className="textContainer">
//             <Link to={`/${item.id}`}>{item.title}</Link>
//             <span>{item.bedroom} bedroom</span>
//             <b>$ {item.price}</b>
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// }

// export default Pin;

import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="w-64 p-4 bg-white rounded-lg shadow-md">
          <div className="flex space-x-3">
            <img
              src={item.images[0]}
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1 space-y-2">
              <Link
                to={`/${item.id}`}
                className="text-lg font-semibold text-blue-600 hover:underline block"
              >
                {item.title}
              </Link>
              <span className="text-sm text-gray-600 block">
                {item.bedroom} bedroom
              </span>
              <b className="text-lg text-gray-800 block">${item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;

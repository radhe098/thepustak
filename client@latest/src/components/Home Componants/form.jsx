// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitting Name ${name} Email ${email}`);
//   }

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Form;
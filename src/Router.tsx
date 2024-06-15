// import { Routes, Route } from 'react-router-dom'
// import Login from './Login';
// import App from './App';

// export default function RouterComponent() {
//     if (!props.user) {
//         return (
//             <Routes>
//                 <Route path="/" element={<Blogs navigate={props.navigate} />} />
//                 <Route path="/blog/:id" element={<Blog />} />
//                 <Route path="*" element={<Blogs navigate={props.navigate} />} />
//             </Routes>
//         );
//     } else {
//         return (
//             <Routes>
//                 <Route path="/" element={<Blogs navigate={props.navigate} user={props.user} />} />
//                 <Route path="/blogs/user/:id" element={<MyBlogs navigate={props.navigate} user={props.user} />} />
//                 <Route path="/create" exact element={<CreateBlog navigate={props.navigate} user_id={props.user.id} />} />
//                 <Route path="/edit/:id" exact element={<EditBlog user_id={props.user.id} />} />
//                 <Route path="/blog/:id" element={<Blog />} />
//                 <Route path="/chat" element={<Chats navigate={props.navigate} user={props.user}/>} />
//                 <Route path="*" element={<Blogs navigate={props.navigate} user={props.user} />} />
//             </Routes>
//         );
//     }

// }

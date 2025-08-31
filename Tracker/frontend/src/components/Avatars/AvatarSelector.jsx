import React ,{useState,useEffect,useContext}from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthContext'


const AvatarSelector = () => {

 const {isLoggedIn} = useContext(AuthContext);
 const [open,setOpen] = useState(false);
 const [selectedAvatar , setSelectedAvatar] = useState("");

 const avatars = [
  "/avatars/chicken.png",
  "/avatars/girl.png",
  "/avatars/gorilla.png",
  "/avatars/hacker.png",
  "/avatars/leonardo.png",
  "/avatars/man.png",
  "/avatars/owl.png",
  "/avatars/profile.png",
  "/avatars/tiger.png",
  "/avatars/woman.png",
 ];

 useEffect(()=>{

   const saved = localStorage.getItem("userAvatar");
   if(saved) setSelectedAvatar(saved);
  
 },[])

 const handleSelect = (avatar)=>{
  setSelectedAvatar(avatar);
  localStorage.setItem("userAvatar",avatar)
  setOpen(false);

 }

   if (!isLoggedIn) return null;

  return (
   <div className="relative">
    
      {selectedAvatar ? (
        <img
          src={selectedAvatar}
          alt="user"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
          // onError={(e) => (e.currentTarget.src = "avatars/chicken.png")}
        />
      ) : (
        <FaUserCircle
          className="text-3xl text-gray-600 dark:text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}

      {/* Avatar dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex flex-wrap gap-2 z-50">
          {avatars.map((avatar) => (
            <img
              key={avatar}
              src={avatar}
              alt="avatar"
              className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
                selectedAvatar === avatar ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => handleSelect(avatar)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarSelector

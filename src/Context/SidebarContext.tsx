// import { ReactNode, createContext, useState } from "react";

// type MenuType ={
//   children:ReactNode
// }
// type MenuTypeProvider = { 
//   isOpen:boolean
//   setIsOpen : (c:boolean) => void
// }



// export const Menus = createContext<MenuTypeProvider | null>(null)

// export default function MenuProvider({children}:MenuType){
//   const [isOpen,setIsOpen] = useState<boolean>(false)
//   return(
//     <Menus.Provider value={{isOpen,setIsOpen}}>{children}</Menus.Provider>
//   )
// }
// // console.log(Menus);

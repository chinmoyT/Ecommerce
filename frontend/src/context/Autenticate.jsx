// import {useState, createContext, useContext} from 'react'

// const AuthContext = createContext(null)
// export const AuthProvider = (props)=> {
//     const [user, setUser] = useState()
//     const login = (userData)=> {
//         setUser(userData)
//     }
//     const logout = ()=> {
//         setUser(null)
//     }
//     return (
//         <AuthContext.Provider value={{user, setUser}}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = ()=> useContext(AuthContext)
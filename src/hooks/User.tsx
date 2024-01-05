import { createContext, useContext } from "react"

export const CurrentUserContext = createContext(undefined)

export function useCurrentUser() {
  const currentUser = useContext(CurrentUserContext)
  if (currentUser === undefined)
    throw new Error("useCurrentUser must be used inside a CurrentUserContext")
  return currentUser
}

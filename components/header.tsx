// import { MainNav } from "./main-nav"
import { Button } from "./ui/button"
// 
import Title from "./title"
import AuthButtons from "./auth-buttons"

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <Title />
        <AuthButtons />
      </div>
    </header>
  )
}

    // <header className="sticky flex justify-center border-b">

    // </header>
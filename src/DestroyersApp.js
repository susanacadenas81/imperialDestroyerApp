import { Header } from "./components/ui/Header"
import { AppRouter } from "./routers/AppRouter"

export const DestroyersApp = () => {
  return (
    <>
      <Header />
      <div className='router-wrapper'>
          <AppRouter />
      </div>
    </>
  )
}

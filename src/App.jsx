import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {

  return (
    <>
      <div className="">
        <Icon icon="streamline:class-lesson-solid" className=""/>
        <span className="">CP5 - Webdev</span>
      </div>
      <div className="">
        <div className="">
          Fake users list
        </div>
        <hr className="" />
        {
          [...Array(5).keys()].map((e, idx) => <FakeUser key={idx} />)
        }
      </div>
    </>
  )
}

export default App

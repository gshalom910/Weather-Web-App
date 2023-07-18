import CoderSec from "./components/CoderSec/CoderSec";
import FirstSec from "./components/FirstSec/FirstSec";
import SearchForm from "./components/SearchForm/SearchForm";
import SecondSec from "./components/SecondSec/SecondSec";

import "./styles.css";

export default function App() {
  return (
    <>
      <CoderSec />
      <div className="container main-wrapper">
        <div className="inner-wrapper">
          <SearchForm />
          {/* <FirstSec /> */}
          <SecondSec />
        </div>
      </div>
    </>
  );
}

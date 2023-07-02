import CoderSec from "./components/CoderSec/CoderSec";
import FirstSec from "./components/FirstSec/FirstSec";
import SearchForm from "./components/SearchForm/SearchForm";
import SecondSec from "./components/SecondSec/SecondSec";

import "./styles.css";

export default function App() {
  return (
    <>
      <CoderSec />
      <div class="container main-wrapper">
        <div class="inner-wrapper">
          <SearchForm />
          <FirstSec />
          <SecondSec />
        </div>
      </div>
    </>
  );
}

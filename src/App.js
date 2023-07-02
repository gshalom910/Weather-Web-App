import CoderSec from "./components/CoderSec";
import FirstSec from "./components/FirstSec";
import SearchForm from "./components/SearchForm";
import SecondSec from "./components/SecondSec";

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

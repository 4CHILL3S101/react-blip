import { useState } from "react";
import { SuccessModal, ErrorModal, WarningModal } from "./components";
import "./App.css";

function App() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(true);
  const [warningOpen, setWarningOpen] = useState(false);

  return (
    <>
      <SuccessModal
        open={successOpen}
        tl="Action completed successfully"
        bt="Close"
        onClose={() => setSuccessOpen(false)}
      />

      <ErrorModal
        open={errorOpen}
        tl="Something went wrong"
        bt="Dismiss"
        onClose={() => setErrorOpen(false)}
      />

      <WarningModal
        open={warningOpen}
        tl="Are you sure you want to continue?"
        bt="Got it"
        onClose={() => setWarningOpen(false)}
      />
    </>
  );
}

export default App;

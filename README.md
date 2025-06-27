# 🚨 react-blip

**react-blip** is a lightweight and customizable React component library for displaying animated modals: success, error, and warning. Perfect for instant visual feedback in your app.

![Demo](https://user-images.githubusercontent.com/demo-url/example.gif)

---

## 📦 Installation

```bash
npm install react-blip
```

or with yarn:

yarn add react-blip

USAGE

import { SuccessModal, ErrorModal, WarningModal } from "react-blip";

<SuccessModal
open={true}
tl="Action completed successfully"
bt="Close"
onClose={() => setOpen(false)}
/>;

---

import { SuccessModal, ErrorModal, WarningModal } from "react-blip";

<SuccessModal
open={true}
tl="Action completed successfully"
bt="Close"
onClose={() => setOpen(false)}
/>;

🖼️ Modal Types
✅ SuccessModal
Green button

Success animation

Used for confirming actions

❌ ErrorModal
Red or pink background gradient

Error icon

Used for error feedback

⚠️ WarningModal
Yellow/orange tone

Caution icon

Used for alerts, confirmations

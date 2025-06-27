# 🚨 react-blip

**react-blip** is a lightweight and customizable React component library for displaying animated modals: **Success**, **Error**, and **Warning**.  
Perfect for instant visual feedback in your React app.

![Demo](https://user-images.githubusercontent.com/demo-url/example.gif)

---

## 📦 Installation

Using **npm**:

```bash
npm install react-blip
Or using yarn:


yarn add react-blip
🚀 Usage
jsx


import { SuccessModal, ErrorModal, WarningModal } from "react-blip";

<SuccessModal
  open={true}
  tl="Action completed successfully"
  bt="Close"
  onClose={() => setOpen(false)}
/>;
You can also use ErrorModal or WarningModal with the same props.

🖼️ Modal Types
✅ SuccessModal
Green confirmation button

Animated success icon

Used for confirming successful actions

❌ ErrorModal
Red/pink background gradient

Animated error icon

Used for error or failure feedback

⚠️ WarningModal
Yellow/orange tone

Animated warning icon

Used for alerts, prompts, or confirmations

🔧 Props
Prop	Type	Description
open	boolean	Controls whether the modal is visible
tl	string	Title or label text
bt	string	Button text (e.g., "Close")
br	string	Optional border radius (e.g., "12px")
icon	JSX	Optional custom JSX or Lottie icon
onClose	function	Callback function when modal is closed

📄 License
MIT © 2025 mrt_dev

🙌 Contributions
Contributions are welcome!
Feel free to open an issue or submit a pull request.

🌐 Links
NPM [Repository](https://www.npmjs.com/package/react-blip)
```

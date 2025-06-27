# 🚨 react-blip

**react-blip** is a lightweight and customizable React component library for displaying animated modals: **Success**, **Error**, and **Warning**.  
Perfect for instant visual feedback in your React app.

## Preview

## ![Success Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/success_sample.png)

## Preview

## ![Warning Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/warning_sample.png)

## ![Error Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/error_sample.png)

## 📦 Installation

Using **npm**:

```bash
npm install react-blip

Or using yarn:

yarn add react-blip


---
🚀 Usage

import { SuccessModal, ErrorModal, WarningModal } from "react-blip";
import "react-blip/dist/react-blip.css";

<SuccessModal
  open={true}
  tl="Action completed successfully" (optional)
  bt="Close" (optional)
  onClose={() => setOpen(false)}
/>;

--
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
NPM [Repository]([text](https://www.npmjs.com/package/react-blip))
GITHUB [Repository]([text](https://github.com/4CHILL3S101/react-blip.git))


💬 About the Creator
Hi! I'm Mrt Ervn, an aspiring full-stack develope.
I also build Android apps and experiment with IoT tech!

💻 Currently building tools that make interfaces better — one component at a time.
🧠 Interests: UI/UX design, React ecosystem,  and animated feedback systems.
☕ Help me get a personal computer so I can keep coding — [Buy Me a Coffee!](https://www.buymeacoffee.com/mrt_dev)

```

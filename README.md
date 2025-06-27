# 🚨 react-blip

**react-blip** is a lightweight and customizable React component library for displaying animated modals: **Success**, **Error**, and **Warning**.  
Perfect for instant visual feedback in your React app.

The component is customizable including the messages, background colors, and including the icons.

These are the samples:

## Preview

## ![Success Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/success_sample.png)

## Preview

## ![Warning Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/warning_sample.png)

## ![Error Modal Sample](https://github.com/4CHILL3S101/react-blip/blob/master/src/assets/error_sample.png)

## 📦 Installation

Please note that this library is only applicable for react 18.0.0 above.

Using **npm**:

```bash
npm install react-blip
```

Using **yarn**:

```bash
yarn add react-blip
```

---

## Usage

You can import the css in your app entry point ('main or index') so that you don't need to import it on every file.

# Sample code implementation:

      import React,{useState} from "react"
      import {SuccessModal,WarningModal,ErrorModal} from "react-blip" //These are the imports

      export default function MyHomepage(){
      const [response,SetResponse] = useState(false);
      const [message,setResponseMessage] = useState('');

      return(
      <SuccessModal open={loading}/>
      {/_ Please note that only the "open" prop is required. If you do not specify the other props it will automatically use the default template._/}
      )
      }

---

# Prop reference # Description

tl - this is the response message that is being displayed in the modal
br - this is the border radius of the container.
bt - this stands for button text. the default is "Close" but you can change it as you like.

I hope that this will help you especially those beginners. I am planning to improve this more in the future. Thankyou for your support.

📄 License
MIT © 2025 mrt_dev

🙌 Contributions
Contributions are welcome!
Feel free to open an issue or submit a pull request.

🌐 Links
NPM - https://www.npmjs.com/package/react-blip
GITHUB - https://github.com/4CHILL3S101/react-blip.git

👋 About the Creator
Hi! I'm Mart Ervin, an aspiring developer who enjoys building tools and experimenting with ideas. I made this component for my own use, but decided to share it publicly in case it helps someone else — especially beginners.

If you find this helpful or want to support me, I’d greatly appreciate it!

Thanks for checking it out 💚

```

```

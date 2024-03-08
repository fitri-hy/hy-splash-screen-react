# Modules Splash Screen for React v.1.0.1

ReactJS modules are simple but have many advantages, one of which is that you can customize them freely.

## NPM Installation

```sh
npm install hy-splash-screen-react
```

## Example Project Implemented

```sh
// Add - Impport module //
import SplashScreen from 'hy-splash-screen-react';
//----//

const App = () => {
  return (
    <div>
    
      // Add - Default components //
      <SplashScreen src="your logo" text="Your Company"/>
      //----//
      
    </div>
  );
};

export default App;
```

## Customization

| Atribute                  |Key Example                        |Description|
|:-                         |:-                                 |:-|
|`screenInterval="key?"`    |`1000` `3000`                      |Time Interval (ms)|
|`screenBg="key?`           |`rgba(0, 0, 0, 0.5)` `#ffffff`     |Background screen|
|`screenBlur="key?`         |`blur(5px)`                        |Background blur|
|`screenIndex="key?`        |`1` `99`                           |Z-index|
|`contentHeight="key?`      |`400px`                            |Content height|
|`contentWidth="key?`       |`400px`                            |Content width|
|`contentBg="key?`          |`rgba(0, 0, 0, 0.5)` `#ffffff`     |Background Content|
|`contentBlur="key?`        |`blur(5px)`                        |Background blur Content|
|`contentShadow="key?`      |`0px 0px 5px rgba(0, 0, 0, 0.3)`                                   |Content shadow|
|`contentRadius="key?`      |`10px` `10%`                                                       |Border radius|
|`contentDirection="key?`   |`column` `row` `row-reverse` `column-reverse` `initial` `inherit`  |Content direction|
|`contentGap="key?`         |`10px`                                                             |Content gap|
|`contentAlign="key?`       |`center` `left` `right`                                            |Content align|
|`contentJustify="key?`     |`center` `left` `right`                                            |Justify content|
|`src="key?`                |`https://example.xx/logo.png` `/images/logo.png`                   |Insert images|
|`srcHeight="key?`          |`150px`                                                            |Image height|
|`srcWidth="key?`           |`150px`                                                            |Image width|
|`srcAlt="key?`             |`logo`                                                             |Image alt|
|`animation="key?`          |`fade-in` `fade-out` `slide-in-top` `slide-in-bottom` `slide-in-left` `slide-in-right` `zoom-in` `zoom-out` `rotate-in` `rotate-out`                                                             |Animation Content|
|`text="key?`               |`Your Company`                                                     |Insert text|
|`textColor="key?`          |`#ffff` `rgb(255, 255, 255)`                                       |Text color|
|`textSize="key?`           |`30px` `18rem`                                                     |Text Size|
|`textWeight="key?`         |`normal` `bold` `bolder` `lighter` `number` `initial` `inherit     |Text weight|
|`textFont="key?`           |`Arial`                                                            |Font family|
|`cssScreen="key?`          |`your-css`                                                         |Screen css custom|
|`cssContent="key?`         |`your-css`                                                         |Content css custom|
|`cssSrc="key?`             |`your-css`                                                         |Src css custom|
|`cssText="key?`            |`your-css`                                                         |Text css custom|

## Full Customization

```sh
	<SplashScreen 
		screenInterval="3000"
		screenBg="rgb(255, 255, 255,0.0)"
		screenBlur="blur(5px)"
		screenIndex="99"
		contentHeight="300px"
		contentWidth="250px"
		contentBg="rgb(85, 145, 230,0.99)"
		contentBlur="blur(5px)"
		contentShadow="0px 0px 3px 0px rgba(0,0,0,0.50)"
		contentRadius="5px"
		contentDirection="column"
		contentGap="1px"
		contentAlign="center"
		contentJustify="center"
		src="/images/logo.png"
		srcHeight="50px"
		srcWidth="50px"
		srcAlt="logo"
		animation="zoom-in"
		text="My Company"
		textColor="#ff00ff"
		textSize="1.5rem"
		textWeight="bold"
		textFont="Arial"
		cssScreen="css-screen"
		cssContent="css-content"
		cssSrc="css-src"
		cssText="css-text"
	/>
```

Happy Coding :)
Follow Me: <a href="https://hy-tech.my.id/">FOLLOW</a>

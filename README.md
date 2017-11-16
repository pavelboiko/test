## To mark up a form with 3 elements:
  - checkbox 'Check all popups'
  - selectbox, which will include a list of popups
  - button 'Open popup'

## How it should work:
1. When you click on the 'Open popup' button:
  - open the popup that is selected in the selection.
  - If the 'Check all popups' checkbox is selected, then clicking on the 'Open popup' button sequentially opens all the popups (ie, immediately open the first, after closing the first automatically open the second one and so on). In this case, only the active (which is open) should be rendered.
2. The algorithm should work for any number of popups.

## What you need to use:
  - js: React + Redux
  - markup: Bootstrap / Foundation or custom styles

## Goal:
  - Demonstrate your ability of using Redux
  - Use your HTML/CSS skills to show responsive UI
  - Consider the application architecture in advance for potential extensibility using best practices
  - Focus on quality
